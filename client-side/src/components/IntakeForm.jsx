import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Input } from 'reactstrap';
import { Header } from "../style/Style";

function IntakeForm() {
  const [userAge, setUserAge] = React.useState('');
  const [userGender, setUserGender] = React.useState('');

return (
  <Form onSubmit= {e => {e.preventDefualt();}}>

    <Header>General Information</Header>
    <br />

    <FormGroup>
      <Input
        type='age'
        name='age'
        value={userAge}
        placeholder='your age'
        autocomplete='off'
        onChange= {e => setUserAge(e.target.value)}
      />
    </FormGroup>

    <FormGroup>
     <FormControl as='select'
      onChange= {e => setUserGender(e.target.value)}>
      <option>Your gender</option>
      <option>Femal</option>
      <option>Male</option>
      <option>Other</option>
     </FormControl>
    </FormGroup>

    <Button type='submit'>Next</Button>
  </Form>
 );
}
export default IntakeForm;
