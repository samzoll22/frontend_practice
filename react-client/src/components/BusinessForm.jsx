import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';

class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <Form>
      <FormGroup >
        <h4 className="formHeaderText">
          Business Name
        </h4>
        <FormControl type="text" />
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Business Email
        </h4>
        <FormControl type="email" />
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Create a Username
        </h4>
        <FormControl type="text" />
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Password
        </h4>
        <FormControl type="password" />
      </FormGroup>
      <FormGroup >
        <h4 className="formHeaderText">
          Website
        </h4>
        <FormControl type="text" />
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
      <div className="center">
        <Button className="registerButton" type="submit">
          REGISTER
        </Button>
      </div>
    </Form>)
  }
}

export default BusinessForm;