import React, { useEffect, useState } from 'react'
import { GiCancel } from "react-icons/gi";
import "./header.scss";
import Portal from '../../portal';
import { nav } from '../../utils/data/data';
import { useNav } from '../../hooks/useNav';
import navigate_ftn from '../../utils/reusable_ftn/navigate_fn';

function Header () {
    const [menuToggle, setMenuToggle] = useState(false);
    const {currentNav, root, setCord} = useNav();

    
    useEffect(() => {
        const header = document.querySelector("#header");
        const menu = document.querySelector("#menu");
        const clicker = document.querySelector("#clicker");

        const winScroll = window.addEventListener("scroll", ()=>
        {
        let height = header.getClientRects()[0]?.y
            if(height > -58) {
                menu.classList.remove("upArrow");
                clicker.classList.remove("show");
                
                return 
            }
            menu.classList.add("upArrow");
            clicker.classList.add("show");
        })

        return(()=> window.removeEventListener("scroll", winScroll))

    }, [])
    

    const menu = (e)=>{
        if(e.target.className === "clicker show") return window.scrollTo(0, 0);
        setMenuToggle(true)
    }

  return (
    <div className='header' id='header'>
        <span className='right_header'>David</span>
        <div className='left_header'>
            <Portal toggle = {menuToggle} setToggle = {setMenuToggle}>
                <ul className='menu_items'>
                    <span className='cancel' onClick={()=>setMenuToggle(false)}><GiCancel size={20}/></span>
                    {
                    nav.map((res,id)=> <li 
                                    key={id}
                                    className={currentNav?.key === res.id ? "active" : ""} 
                                    onClick={()=> setCord(navigate_ftn(root.current, res.id))}
                                    >
                                    {res.title}
                                    </li>)
                    }
                </ul>
            </Portal>
            <div className='menuGap'></div>
            <div id='menu' className="menu" >
                <div id="clicker"  className='clicker' onClick={(e)=>menu(e)}></div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Header