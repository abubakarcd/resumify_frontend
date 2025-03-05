import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './components/App.jsx'
import Resumeoptions from './components/formcomponents/resumeoptions.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Resumeoptions/> */}
  </StrictMode>,
)
