import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../../img/phone/1.png'
import image2 from '../../img/phone/2.png'
import image3 from '../../img/phone/3.png'
import image4 from '../../img/phone/4.png'
import image5 from '../../img/phone/5.png'
import image6 from '../../img/phone/6.png'
import image7 from '../../img/phone/7.png'
import image8 from '../../img/phone/8.png'



export function Banner() {

    return (
        <Carousel
            showThumbs={false}
            showArrows={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={2000}
        >
            <div><img src={image7} alt="Depoimento" /></div>
            <div><img src={image2} alt="Depoimento" /></div>
            <div><img src={image3} alt="Depoimento" /></div>
            <div><img src={image4} alt="Depoimento" /></div>
            <div><img src={image5} alt="Depoimento" /></div>
            <div><img src={image6} alt="Depoimento" /></div>
            <div><img src={image8} alt="Depoimento" /></div>
            <div><img src={image1} alt="Depoimento" /></div>
        </Carousel>
    )
}