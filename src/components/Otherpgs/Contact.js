import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = (props) => {
  return (
    <Form>
    <div className="contactform" style={{fontFamily:'Georgia', color: '#2e4c63', padding:'0 10%'}}>
      <FormGroup>
        <Label for="exampleEmail"><h1 style={{fontFamily:'Georgia', color: '#2e4c63'}}>Contact Networkers</h1></Label> <br/> <br/>
      </FormGroup>
      <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputfirstname" >Full Name</Label>
            <Input type="text"  id="inputFirstName" placeholder="Full Name"/>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputlastnamed4">E-Mail</Label>
            <Input type="text"  id="inputLastName" placeholder="E-Mail" />
          </FormGroup>
          
        </div>
      
      
      
    
      <FormGroup>
        <Label for="exampleSelectMulti">How would you rate your experience with NetWorkers?</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          <option>1 - awful</option>
          <option>2 - bad</option>
          <option>3 - meh</option>
          <option>4 - good</option>
          <option>5 - great</option>
        </Input>
      </FormGroup>
      <br/>
      <FormGroup>
        <Label for="exampleText">Write your message</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Please let us know us your thoughts!" />
      </FormGroup>
      
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Send Message!
        </Label>
      </FormGroup>
      </div>
    </Form>
  );
}

export default Contact;
