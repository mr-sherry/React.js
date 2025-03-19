import { createRoot } from 'react-dom/client'
import './index.css'
import Btn from './App'

createRoot(document.getElementById('root')).render(
  <>
  <Btn color="yellow"/>
  <Btn color="gray"/>
  <Btn color="red"/>
  

  </>
)
