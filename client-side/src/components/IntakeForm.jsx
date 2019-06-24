import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";

function IntakeForm() {
  const [userAge, setUserAge] = React.useState("");
  const [userGender, setUserGender] = React.useState("");

return (
  <Form
    onSubmit = {e => {
      e.preventDefualt();
    }}
  >

    <FormGroup>
      <Input
        type = 'age'
        name = 'age'
        value = {userAge}
        placeholder = 'your age'
        onChange = {
          e => setUserAge(e.target.value)
        }
      />
    </FormGroup>
    <FormGroup>
      <Input
        type = 'gender'
        name= 'gender'
        value = {userGender}
        placeholder = 'your gender'
        onChange = {
          e => setUserGender(e.target.value)
        }
      />
    </FormGroup>
    <Button type='submit'> Next </Button>
  </Form>
 );
}
export default IntakeForm;
