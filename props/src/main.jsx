import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import DarkVariantExample from './components/cr.jsx'
import Greetings from './components/greet';


createRoot(document.getElementById('root')).render(
    <>
    
    <div className='d-flex gap-5'>
    <Greetings name="Ahmed"/>
    <Greetings name="shafqat"/>
    <Greetings name="raza"/>
    </div>
    <App />
    <div style={{ height: '200px', backgroundColor: 'lightblue' }}>

    <DarkVariantExample/>
    </div>
    </>
)
