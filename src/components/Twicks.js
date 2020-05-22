import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'

class Twicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    console.log("twicks - "+typeof(this.props.twicks));
    let twicks = this.props.twicks;
    twicks.map(twick=>console.log(twick));
    return (
      <ListGroup variant="flush">
      {
        twicks.map(twick=>{
          return(
              <ListGroup.Item>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="bottom" src={twick.user.avatar_url} />
                <Card.Body>
                  <Card.Title>{twick.user.username}</Card.Title>
                </Card.Body>
              </Card>

              </ListGroup.Item>
          )
        })
      }
      </ListGroup>
    );
  }
}

export default Twicks;
