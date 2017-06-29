import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Glyphicon, Modal } from 'react-bootstrap';
import Nav from './components/Nav.jsx';
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
        : (
          <Grid >
            <div className="center topPadd">
              <Modal.Dialog className="animation rotateIn ">
                <div className="topPadd">
                  <Glyphicon glyph="glyphicon glyphicon-ok" className="successMark" />
                </div>
                <h1 className="headerText"> Submission Success ! </h1>
                <div className="topPadd bottomPadd">
                  <h4>Hold on tight and we'll be in touch soon.</h4>
                </div>
              </Modal.Dialog>
            </div>
          </Grid>)}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

