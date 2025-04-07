import './Contact.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaLink } from "react-icons/fa6";
import { trimValues } from '../../utils/helpers';
import { validateForm } from '../../utils/formValidation';
import { useState } from 'react';
import { sendEmail } from '../../services/contactApi';



export const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const trimmedData = trimValues(data);
    trimmedData.website = 'ideastradeweb.com';
    
    const { isValid, errors } = validateForm(trimmedData);
    
    if (!isValid) {
      setErrors(errors);
      return;
    };

    const fetchData = async () => {
      setIsSubmitting(true);

      try {
        const response = await sendEmail(trimmedData);
        toast.success(response?.data?.message || 'Your message has been sent successfully');
        setIsSubmitting(false); 
        setErrors({});
        // reset form
        e.target.reset();

      } catch (error) {
        setIsSubmitting(false); 
        setErrors({});
        console.log('Error', error.message);
        toast.error(error?.response?.data?.message || 'Something went wrong');   
      }
    }

    fetchData();
  }

  
  

  return (
    <section className='contact'>
      <div className='contact__container'>

        <h2 className='contact__h2'>Get in touch</h2>
        <p className='contact__p'>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
      
        <div className='contact__row'>
          <div className='contact__form-wrapper'>
            <form className='contact__form' onSubmit={handleSubmit}>
             <div className='contact__input-group-wrapper'>
                {/* NAME */}
                <div className='contact__form-group'>
                  <label className='contact__label' htmlFor="name">Name</label>
                  <input 
                    className='contact__input' 
                    type="text" 
                    id="name"
                    name='name' 
                    autoComplete='off' 
                  />
                  {errors?.name && <p className='contact__error'>{errors.name}</p>}
                </div>
                {/* EMAIL */}
                <div className='contact__form-group'>
                  <label className='contact__label' htmlFor="email">Email</label>
                  <input 
                    className='contact__input' 
                    type="text" 
                    id="email" 
                    name='email'
                    autoComplete='off' 
                  />
                  {errors?.email && <p className='contact__error'>{errors.email}</p>}
                </div>
             </div>

             <div className='contact__form-group'>
              <label className='contact__label' htmlFor="message">Message</label>
              <textarea 
                className='contact__textarea' 
                id="message" 
                rows="9" 
                cols="30"
                name='message'
              ></textarea>
              {errors?.message && <p className='contact__error contact__error--text-area'>{errors.message}</p>}
             </div>

             <div className='contact__btn-wrapper'>
              <button type='submit' className='contact__btn' disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Send message'}
              </button>
             </div>

            </form>
          </div>

          <div className='contact__info'>
            <ul className='contact__ul'>

              <li className='contact__li'>
                <h3 className='contact__h3'>Address</h3>
                <p className='contact__info-p first'>Somewhere Road #654</p>
                <p className='contact__info-p'>Madrid, 28028 Spain</p>
              </li>

              <li className='contact__li'>
                <h3 className='contact__h3'>Email</h3>
                <p className='contact__info-p'>juanfdx@ideastradeweb.com</p>
              </li>

              <li className='contact__li'>
                <h3 className='contact__h3'>Phone</h3>
                <p className='contact__info-p'>+34 000 000 000</p>
              </li>

              <li className='contact__li'>
                <h3 className='contact__h3'>Social</h3>
                <ul className='contact__social-ul'>
                  <li className='contact__social-li'>
                    <Link to={'https://www.facebook.com'} target='_blank' rel='noopener noreferrer'>
                      <FaFacebookF className='contact__info-icon' />
                    </Link>
                  </li>
                  <li>
                    <Link to={'https://github.com/juanfdx'} target='_blank' rel='noopener noreferrer'>
                      <FaGithub className='contact__info-icon' />
                    </Link>
                  </li>
                  <li>
                    <Link to={'https://www.instagram.com'} target='_blank' rel='noopener noreferrer'>
                      <FaInstagram className='contact__info-icon' />
                    </Link>
                  </li>
                  <li>
                    <Link to={'https://es.linkedin.com'} target='_blank' rel='noopener noreferrer'>
                      <FaLinkedinIn className='contact__info-icon' />
                    </Link>
                  </li>
                  <li>
                    <Link to={'https://juanfdx.com'} target='_blank' rel='noopener noreferrer'>
                      <FaLink className='contact__info-icon' /> 
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className='contact__footer'>
        <ul className='contact__footer-ul'>
          <li className='contact__footer-li'>@ {year} ideastradeweb.com</li>
        </ul>
      </footer>
    </section>
  )
}