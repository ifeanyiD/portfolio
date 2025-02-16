export default function navigate_ftn(parentElem, navigateELem){
    const targetElements = [...parentElem.children].reduce((state, reducer)=>
       reducer.dataset.section ? {[reducer.dataset.section] : reducer, ...state} : state
    , {});

        for (const section in targetElements) {
            if(section === navigateELem){
                if (Object.prototype.hasOwnProperty.call(targetElements, section)) {
                    let storage = {}
                    const element = targetElements[section];
                    storage.scrolly = window.scrollY;
                    storage.elemOffsetTop = element.offsetTop
                    return storage;
                }
            }
            
        }

}

