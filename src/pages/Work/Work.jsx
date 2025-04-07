import './Work.css';
import { FaLock, FaTv } from "react-icons/fa6";
import { FaCog, FaLink, FaCode } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { IoDiamondOutline } from "react-icons/io5";
import { GrDiamond } from "react-icons/gr";


export const Work = () => {

  return (
    <section className='work'>
      <div className='work-container'>

        <h2 className='work__h2'>What we do</h2>
        <p className='work__p'>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
      
        <div className='work__grid'>
          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <FaCode className='work__icon code' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>Lorem ipsum amet</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>

          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <FaLock className='work__icon padlock' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>Aliquam sed nullam</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>
        
          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <FaCog className='work__icon' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>Sed erat ullam corper</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>
          
          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <FaTv  className='work__icon' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>Veroeros quis lorem</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>
          
          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <FaLink className='work__icon' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>Urna quis bibendum</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>

          
          <div className='work__grid-item'>
            <div className='work__icon-wrapper'>
              <GrDiamond className='work__icon diamond' />
            </div>
           
            <div className='work__info-wrapper'>
              <h3 className='work__h3'>SAliquam urna dapibus</h3>
              <p className='work__p mb-0'>
              Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </div>
          </div>

        </div>

        <div className='contact__btn-wrapper'>
          <button type='button' className='contact__btn'>Lear more</button>
        </div>

      </div>
    </section>
  )
}