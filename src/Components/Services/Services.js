import React from 'react'
import  './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services" id='Services'>
        {/*left side*/}
        <div className="awesomne">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ispum is simpley dummy text of printing of printing Lorem
                <br/>
                ispum is simpley dummy text of printing
            </span>
            <button className="button s-button">Download CV</button>

        </div>

        {/*right*/}
        <div className="cards">
            <div style={{left: '14rem'}}>
              <Card
              emoji={HeartEmoji}
              heading={'Design'}
              detail={"figma, sketch, photoshop, adobi, photopea"}
              />
            </div>

            <div style={{left: "-4rem", top: "12rem"}}>
              <Card
              emoji={Glasses}
              heading={'Design'}
              detail={"figma, sketch, photoshop, adobi, photopea"}
              />
            </div>

            <div style={{top: "19rem", left: "12rem"}}>
              <Card
              emoji={Humble}
              heading={'Design'}
              detail={"figma, sketch, photoshop, adobi, photopea"}
              />
            </div>

        </div>
    </div>
  )
}

export default Services