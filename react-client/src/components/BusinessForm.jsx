import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Button } from 'react-bootstrap';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      pw: '',
      website: '',
    }

    this.getEmailValidationState = this.getEmailValidationState.bind(this);
    this.getPwValidationState = this.getPwValidationState.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePw = this.handlePw.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePw(e) {
    this.setState({
      pw: e.target.value
    });
  }

  handleWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }


  getEmailValidationState() {
    const email = this.state.email;
    if (!email) {
      return null;
    } else if (email.includes('@') && email.includes('.com')) {
      return 'success';
    } else if (email.includes('@') && !email.includes('.com')) {
      return 'warning';
    } else {
      return 'error';
    }
  }

  getPwValidationState() {
    const length = this.state.pw.length;

    if (length >= 6) {
      return 'success';
    } else if (length > 3) {
      return 'warning';
    } else if (length > 0) {
      return 'error';
    }
  }


  render () {
    return (
    <Form>
      <FormGroup >
        <h4 className="formHeaderText">
          Business Name
        </h4>
        <FormControl
          type="text"
          value={this.state.name}
          onChange={this.handleName}
        />
      </FormGroup>
      <FormGroup
          controlId="formBasicText"
          validationState={this.getEmailValidationState()}
        >
        <h4 className="formHeaderText">
          Business Email
        </h4>
        <FormControl
          type="email"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <FormControl.Feedback />
          {this.getEmailValidationState() === 'error' && <HelpBlock>Please enter a valid email address.</HelpBlock> }
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Create a Username
        </h4>
        <FormControl
          type="text"
          value={this.state.username}
          onChange={this.handleUsername}
        />
      </FormGroup>
      <FormGroup
          controlId="formBasicText"
          validationState={this.getPwValidationState()}
        >
        <div>
          <h4 className="formHeaderText">
            Password<span className="detailText"> 6 characters | 1 uppercase | 1 lowercase | 1 digit </span>
          </h4>

        </div>
        <FormControl
          type="password"
          value={this.state.pw}
          onChange={this.handlePw}
        />
        <FormControl.Feedback />
          {(this.getPwValidationState() === 'error' || this.getPwValidationState() === 'warning') && <HelpBlock>Password should have six characters</HelpBlock> }
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Website<span className="detailText"> (Optional) </span>
        </h4>
        <FormControl
          type="text"
          value={this.state.website}
          onChange={this.handleWebsite}
        />
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Type of Business
        </h4>
        <FormControl componentClass="select" placeholder="select">
          <option value="0">Select your business</option>
          <option value="1">...</option>
        </FormControl>
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Terms of Service
        </h4>
        <Checkbox inline>
           I have read and I do accept <a href="#"> terms of services</a>
        </Checkbox>
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Privacy Policy
        </h4>
        <Checkbox inline>
           I have read and I do accept <a href="#"> privacy policy</a>
        </Checkbox>
      </FormGroup>
      <div className="center buttonPadd">
        <Button className="registerButton" type="submit">
          REGISTER
        </Button>
      </div>
    </Form>)
  }
}

export default BusinessForm;