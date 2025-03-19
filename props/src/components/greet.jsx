import Button from 'react-bootstrap/Button';



function Greetings(props) {
    return(
        <>
        <p>
        hello! {props.name} How are You............
    </p>
    <Button variant='danger'>hello</Button>
        </>
    )
}
export default Greetings;