import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const WorkerForm = () => {
  return (
    <React.Fragment>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="inputEmail4">First Name</Label>
            <Input type="text"  id="inputFirstName" placeholder="First Name"/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputPassword4">Last Name</Label>
            <Input type="text"  id="inputLastName" placeholder="Last Name" autoComplete="off"/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputState">Job Title</Label>
            <Input type="select" name="select" id="inputJobTitle" >
              <option>Choose...</option>
              <option>Accountant</option>
              <option>Builder</option>
               <option>Chef</option>
              <option>Clown</option>
              <option>Graphic Designer</option>

            </Input>
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">Email</Label>
            <Input type="email"  id="inputEmail4" placeholder="Email"/>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputPassword4">Password</Label>
            <Input type="password"  id="inputPassword4" placeholder="Password" autoComplete="off"/>
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="inputAddress">Address</Label>
          <Input type="text"  id="inputAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress2">Address 2</Label>
          <Input type="text"  id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="inputCity">City</Label>
            <Input type="text"  id="inputCity"/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputState">State</Label>
            <Input type="select" name="select" id="inputState" >
              <option>Choose...</option>
              <option>BC</option>
              <option>AB</option>
              <option>ON</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputZip">Zip</Label>
            <Input type="text"  id="inputZip"/>
          </FormGroup>
        </div>
        <FormGroup check>
          <Label className="form-check-label">
              <Input className="form-check-input" type="checkbox" value=""/>
              Check me out
              <span className="form-check-sign">
                <span className="check"></span>
              </span>
          </Label>
        </FormGroup>
        <Button type="submit" color="primary">Sign in</Button>
      </form>
    </React.Fragment>
  );
};

export default WorkerForm;