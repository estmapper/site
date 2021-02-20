import React from 'react';
import { Carousel } from 'react-bootstrap';
import boy from '../Boy.jpg';
import lady from '../Lady.jpg';

export default function Slider() 
{
 return (
     <Carousel>
          <Carousel.Item style={{'height':'600px'}}>
            <img 
            className="d-block w-100"
            src={boy}
            alt="First Slide"
            />
            <Carousel.Caption>
                <h3>Что-нибудь напиши, но не обязательно</h3>
                <p>Сюда пиши текст помельче.</p>
            </Carousel.Caption>
           </Carousel.Item>

           <Carousel.Item style={{'height':'600px'}}>

            <img 
            className="d-block w-100"
            src={lady}
            alt="Second Slide"
            />
            <Carousel.Caption>
            <h3>Что-нибудь напиши, но не обязательно</h3>
            <p>Сюда пиши текст помельче.</p>
            </Carousel.Caption>
            </Carousel.Item>

     </Carousel>

 )
}