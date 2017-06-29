import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav.jsx';
import Success from './components/RegistrationSuccess.jsx';
import Form from './components/BusinessForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false
    }
    this.isSubmitted = this.isSubmitted.bind(this);
  }

  isSubmitted() {
    this.setState({
      formSubmitted: true
    })
  }

  render () {
    return (
    <div>
      <Nav />

        {!this.state.formSubmitted ?
        (<Grid>
          <Row>
            <Col sm={12} md={6} mdOffset={3}>
              <h1 className="animation slideInDown headerText center">LET'S GET STARTED</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} mdOffset={3}>
              <Form isSubmitted={this.isSubmitted} />
            </Col>
          </Row>
        </Grid>)    
        : (<Success />)}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

