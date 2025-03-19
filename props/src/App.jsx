import Button from 'react-bootstrap/Button';
import UserCard from './components/CardOne';
import CloseButton from 'react-bootstrap/CloseButton';


import './App.css'

function App() {

  return (
    <>
    <div className='d-flex gap-5'>

    <UserCard name="Ahmed" age={21} online={true}/>
    <UserCard name="raza" age={23} online={false}/>
    <UserCard name="shahid" age={25} online={true}/>
    <UserCard name="ali" age={99} online={false}/>
    </div>
    
   <p className='text-danger'> helllo hi</p>
      <Button variant="danger">Danger</Button>
      <Button variant='success'> hello</Button>
      <button className='btn btn-danger'>red</button>
      <CloseButton />
    </>
  )
}

export default App
