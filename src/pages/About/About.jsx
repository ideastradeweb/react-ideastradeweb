import './About.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLink } from "react-icons/fa6";
import team from '../../data/team';


export const About = () => {
  
  return (
    <section className='about'>
      <div className='about-container'>

        <h2 className='about__h2'>Our team</h2>
        <p className='about__p'>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>

        <div className='about__grid'>

          {team.map(dev =>

            <div key={dev.id} className='about__grid-item'>

              <div className='about__img-wrapper'>
                <img className='about__img' src={dev?.image ? dev.image : 'https://via.placeholder.com/200'} alt={dev.name} />
              </div>

              <div className='about__info'>
                <h3 className='about__h3'>{dev.name}</h3>
                <p className='about__p-team role'>{dev.role}</p>
                <p className='about__p-team desc'>{dev.bio}</p>
                <ul className='about__social-ul'>
                  <li className='about__li'>
                      <Link to={'https://www.facebook.com'} target='_blank' rel='noopener noreferrer'>
                        <FaFacebookF className='about__info-icon' />
                      </Link>
                  </li>
                  <li>
                    <Link to={'https://www.instagram.com'} target='_blank' rel='noopener noreferrer'>
                      <FaInstagram className='about__info-icon' />
                    </Link>
                  </li>
                  <li>
                      <Link to={'https://es.linkedin.com'} target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn className='about__info-icon' />
                      </Link>
                    </li>
                </ul>
              </div>
            </div>

          )}

        </div>

      </div>
    </section>
  )
}