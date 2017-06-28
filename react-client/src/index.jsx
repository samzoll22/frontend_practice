import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import Nav from './components/Nav.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <Nav />
      <Row>
         <Col xs={12} md={6} mdOffset={3}>
           <h1 className="headerText">LET'S GET STARTED</h1>
         </Col>
       </Row>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

  //   <div>
  //     <Grid>
  //       <Nav />
  //       <Row>
  //         <Col xs={12} md={6} mdOffset={3}>
  //           <h1>LET'S GET STARTED</h1>
  //         </Col>
  //       </Row>
  //     </Grid>
  //   </div>)
  // }