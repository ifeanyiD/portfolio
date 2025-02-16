import React, { useEffect,} from 'react'
import {Outlet } from 'react-router-dom'
import Header from '../../component/header/header';
import "./layout.scss";
import { useNav } from '../../hooks/useNav';
import navigate_ftn from '../../utils/reusable_ftn/navigate_fn';
import { nav } from '../../utils/data/data';


function Layout () {
  const {currentNav, root, cord, setCord} = useNav();

  useEffect(() => {
    const menuId = document.getElementById("l_menu")
    const scrollMonitor = window.addEventListener("scroll", 
      ()=>{
        if(window.scrollY > 150){

          return menuId?.classList.add("show")

        }
         menuId.classList?.remove("show")
      })
    return () => {
      window.removeEventListener("scroll", scrollMonitor)
    };
    
  }, []);

  useEffect(() => {
    root.current = document.getElementById("layout").querySelector(".root");
    window.scrollTo(0, cord.elemOffsetTop)
  }, [cord, root])
  
  return (
    <div className='layout' id='layout'>
      <Header/>
      <ul className='l_menu' id='l_menu'>
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
      <Outlet/>
    </div>
  )
}

export default Layout