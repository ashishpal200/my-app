import React from 'react'
import './intro.css'


import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Ashish from '../../img/ashish.jpg';
const Intro = () => {
  return (
   <div className="intro" id='Navbar'>
       <div className="i-left">
           <div className="i-name">
               <span>Hy! I Am</span>
               <span>Ashish Pal</span>
               <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
           </div>
           <button className='button i-button'>click Me</button>
           <div className="i-icon">
               <img src={Github} alt="" />
               <img src={LinkedIn} alt="" />
               <img src={Instagram} alt="" />
           </div>
       </div>
       <div className="i-right">
       <img src={Ashish} alt="" />
          </div>
    
   </div>
  )
}

export default Intro;