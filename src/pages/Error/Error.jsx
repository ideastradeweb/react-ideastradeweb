import { Link } from 'react-router-dom';
import './Error.css';


export const Error = () => {
  
  return (
    <section className='error'>
      <div className='error__container'>

        <h1 className='error__h1'>404</h1>
        <p className='error__p'>We can't seem to find the page you're looking for</p>
        <Link className='error__link' to='/'>back home</Link>
      
      </div>
    </section>
  )
}