import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Twicks from './Twicks';


class SearchTwicks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      isLoaded: false,
      twicks: []
    };
    this.handleChangeSymbol = this.handleChangeSymbol.bind(this);
    this.pullTwicks = this.pullTwicks.bind(this);
  }

  handleChangeSymbol(event) {
    this.setState({symbol: event.target.value});
  }

  pullTwicks(event){
      event.preventDefault();

      let url = `/symbol/${this.state.symbol}.json`;
      console.log(url)
      fetch(url)
     .then(res => res.json())
     .then(
       (result) => {
         let twicks = JSON.parse(JSON.stringify(result.messages));
         this.setState({
           isLoaded: true,
           twicks
         });
       },
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
  }

  render(){
    return (
      <Form>
          <Row>
            <Col>
            <Form.Label column="lg" style={{fontWeight: "bold", color:"grey", marginLeft:"-15px"}}>
               StockTwits - US Stock Symbol
            </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Enter symbol" value={this.state.symbol} onChange={this.handleChangeSymbol}/>
            </Col>
            <Col>
            <Button variant="success" type="submit" onClick={this.pullTwicks}>
              Pull Twicks
            </Button>
            </Col>
          </Row>
          <Row style={{marginTop:'10%'}}>
            <Col>
              <Twicks twicks={this.state.twicks}/>
            </Col>
          </Row>
      </Form>
    );
  }
}

export default SearchTwicks;
