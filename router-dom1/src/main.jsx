import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <App />
)
