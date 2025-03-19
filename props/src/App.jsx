import Button from 'react-bootstrap/Button';
import UserCard from './components/CardOne';


import './App.css'

function App() {

  return (
    <>
    <div className='d-flex gap-5'>

    <UserCard name="Ahmed" age={21} online={true}/>
    <UserCard name="raza" age={23} online={false}/>
    <UserCard name="shahid" age={25} online={true}/>
    </div>
    
   {/* <p className='text-danger'> helllo hi</p>
      <Button variant="danger">Danger</Button>
      <Button variant='success'> hello</Button> */}
    </>
  )
}

export default App
