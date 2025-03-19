import Card from 'react-bootstrap/Card';

function UserCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name:{props.name}</Card.Title>
        <Card.Text>
          Age:{props.age}
        </Card.Text>
        <Card.Text>
          Online: 
           {props.online ? " yes" : " no"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;