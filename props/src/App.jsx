import Button from 'react-bootstrap/Button';
import BasicExample from './components/CardOne';

import './App.css'

function App() {

  return (
    <>
    <div className='d-flex gap-5'>

    <BasicExample title='js'/>
    <BasicExample title='html'/>
    <BasicExample title='css'/>
    </div>
   <p className='text-danger'> helllo hi</p>
      <Button variant="danger">Danger</Button>
      <Button variant='success'> hello</Button>
    </>
  )
}

export default App
