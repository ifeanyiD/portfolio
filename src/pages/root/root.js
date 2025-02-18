import React, { useEffect } from 'react';
import { MdContactMail, MdDeveloperMode, MdDesignServices } from "react-icons/md";
import {  GiRapidshareArrow } from "react-icons/gi";
import { FaReact, FaCss3Alt, FaNodeJs,FaSass, FaHtml5, FaGithub } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import "./root.scss";
import { useNav } from '../../hooks/useNav';
import scrollSpy from '../../utils/reusable_ftn/scrollSpy';

function Root () {
//   <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2M3 11h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"/>
// </svg>
//   const funct = ()=>{
//     const section = document.querySelectorAll("section")[1]
//     console.log(section)
//     window.addEventListener("scroll", ()=> 
//       console.log(section.offsetTop, "height :", section.offsetHeight))
//   }

const {setCurrentNav} =  useNav();
  useEffect(()=>{
      const scrollParent = document.querySelector("#scrollParent");
      const spyS = window.addEventListener("scroll", ()=> 
        setCurrentNav(scrollSpy(scrollParent))
      );

      return(()=> window.removeEventListener("scroll", spyS))
  },[setCurrentNav]);

  
  return (
    <div className='root' id='scrollParent'>
        <section data-section = "about">
            <div>
                <div>
                  <h1>Web Developer & Designer</h1>
                </div>
              
                <p>
                  I bring together the of website with its functional elements to 
                  create a seamless user experience
                </p>
                <button className={"cv"}>Download CV</button>
            </div>
        </section>

        <section data-section = "services">
            <h2>SERVICES</h2>
            <div className='service'>
                <div className='s_box'>
                    <div>
                      <MdDeveloperMode color='rgb(131, 23, 238, 0.6)' fontSize={"1.3em"}/>
                      <h4>Website Development</h4>  
                    </div>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
                </div>
                <div className='s_box'>
                    <div>
                      <MdDesignServices color='rgb(131, 23, 238, 0.6)' fontSize={"1.3em"}/>
                      <h4>Website Design</h4>  
                    </div>
                    <p>Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                </div>
                <div className='s_box'>
                    <div>
                      <GiRapidshareArrow color='rgb(131, 23, 238, 0.6)' fontSize={"1.3em"}/>
                      <h4>RESTful api</h4>  
                    </div>
                    <p>I build website with RESTAPI to access web services in a simple and flexible way</p>
                </div>
            </div>
        </section>
        
        <section data-section = "portfolio">
          <div>
            <label>PORTFOLIO</label>
            <div>picture</div>
          </div>
        </section>

        <section id="skill" data-section = "skill">
          <div className='skill'>
            <h2 >SKILLS</h2>
            <div className='skill_component'>
              <div>
                <FaReact color='purple'/>
                <span>React</span>
              </div>
              <div>
                <AiOutlineJavaScript color='purple'/>
                <span>Javascript</span>
              </div>
              <div>
                <FaCss3Alt color='purple'/>
                <span>CSS</span>
              </div>
              <div>
                <FaHtml5 color='purple'/>
                <span>HTML</span>
              </div>
              <div>
                <FaNodeJs color='purple'/>
                <span>Node js</span>
              </div>
              <div>
                <FaSass color='purple'/>
                <span>SCSS</span>
              </div>
              <div>
                <DiMongodb color='purple'/>
                <span>Mongodb </span>
              </div>
              <div>
                <FaGithub color='purple'/>
                <span>Github</span>
              </div>
              <div>
                <DiVisualstudio color='purple'/>
                <span>Visual studio </span>
              </div>
              <div>
                <SiNetlify color='purple'/>
                <span>Netlify</span>
              </div>
            </div>
          </div>
        </section>

        <section id='contact' data-section = "contact">
          <div>
          <div className='contact_container'>
            <div className='contact_info'>
              <h4>DO YOU HAVE A PROJECT TO DISCUSS?</h4>
              <div><span>GET IN TOUCH</span> <MdContactMail /></div>
              <div>
                <i>engineerdavid04@gmail.com</i>
              </div>
            </div>
            <div className='contact_box'>
              <h4>CONTACT</h4>
              <form>
                <div className='contact_item'>
                  <label>Name</label>
                  <input type = "text"/>
                </div>
                <div className='contact_item'>
                  <label>Email</label>
                  <input type = "text"/>
                </div>
                <div className='contact_item'>
                  <label>Message</label>
                  <textarea/>
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Root