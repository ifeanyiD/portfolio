 const scrollSpy = (scrollParent, _targetElement)=>{
    // if(!scrollParent) return false;
    const currentPos = window.scrollY;
    let matchedEle = {};
    const targetElements = [...scrollParent.children]?.reduce((map, item)=>
        item.dataset.section ? {[item.dataset.section] : item, ...map} : map, {}
    )
    for (let key in targetElements) {

      if (Object.prototype.hasOwnProperty.call(targetElements, key)) {
        const element = targetElements[key];
        const delta = Math.abs(currentPos - element.offsetTop);
        if(!matchedEle.key)  matchedEle = { key, delta };
        if (delta < matchedEle.delta) {
          matchedEle = { key, delta };
        }
      }
      if(_targetElement) {
        console.log("form spy", matchedEle.delta)
        if(key === _targetElement) return  matchedEle.delta
      }
    }
    
    return matchedEle

  }

  export default scrollSpy;