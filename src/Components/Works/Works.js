import React from 'react'
import './Works.css'
const Works = () => {
  return (
    <div className="works">
        {/*left side*/}
        <div className="awesomne">
            <span>Work for all these</span>
            <span>Brand & Clients</span>
            <span>Lorem ispum is simpley dummy text of printing of printing Lorem
                <br/>
                ispum is simpley dummy text of printing
            </span>
            <button className="button s-button">Download CV</button>
        </div>

        {/*right*/}

        <div className="w-right sidebar">
          
          <span className="SlidebarTitle">CATTEGORIES</span>
          <ul className="SlidebarList">
           <li className="SlidebarListItem">HTML</li>
           <li className="SlidebarListItem">REACT</li>
           <li className="SlidebarListItem">ANGULAR</li>
           <li className="SlidebarListItem">JAVASCRIPT</li>
           <li className="SlidebarListItem">CSS</li>
           <li className="SlidebarListItem">JAVA</li>
          </ul>

          </div>

    </div>
  )
}

export default Works