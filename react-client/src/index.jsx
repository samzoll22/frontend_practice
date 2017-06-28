import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './components/Nav.jsx';
import Form from './components/BusinessForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formView: true
    }
  }

  render () {
    return (
    <div>
      <Nav />
      <Grid>
        <Row>
          <Col sm={12} md={6} mdOffset={3}>
            <h1 className="headerText center">LET'S GET STARTED</h1>
          </Col>
        </Row>
        <Row>
          {this.state.formView ?
            <Col sm={12} md={8} mdOffset={2}>
              <Form />
            </Col>
            : <h1>starter view</h1>
          }
        </Row>
      </Grid>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

