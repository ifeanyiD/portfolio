import React from 'react'
import ReactDOM from "react-dom";

function Portal ({children, toggle, setToggle}) {
  return ReactDOM.createPortal( 
      toggle &&
      <div
        style={{
          position : "fixed",
          inset : 0,
          display : "grid",
          backgroundColor : "rgb(0,0,0, 0.5)",
          zIndex : 2
        
        }}
        onClick={()=>setToggle(false)}
      >
        {children}
      </div>
    
    , document.getElementById("portal"))
}

export default Portal