import React from 'react'
import './Portfolio.css'
import{Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Slidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import Musicapp from '../../img/musicapp.png'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        {/*heading*/}
        <span>Recent Project</span>
        <span>Portfolio</span>

        {/*swiper*/}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >

            <SwiperSlide>
                <img src={Slidebar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>{" "}

            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>


        </Swiper>

    </div>
  )
}

export default Portfolio