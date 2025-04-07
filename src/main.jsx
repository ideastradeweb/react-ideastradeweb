import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

//TOASTIFY
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer 
      position='top-right'
      hideProgressBar 
      theme='colored' 
      autoClose={2000} 
      pauseOnFocusLoss={false} 
      limit={2}
    />
  </StrictMode>,
)
