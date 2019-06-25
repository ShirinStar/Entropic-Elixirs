import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Input } from 'reactstrap';
import { Header } from '../style/Style';

function IntakeForm(props) {
  const { handleRegister, userInfo } = props
  const [ user_age, setUser_age ] = React.useState('');
  const [ user_gender, setUser_gender ] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleRegister;
    const userInfo = {
      user_age,
      user_gender
    }
    if(!user_age || !user_gender) {
      alert("Please enter a valid answer");
    } else {
     submit(userInfo);
  }
}

return (
  <Form onSubmit={handleSubmit}>

    <Header>General Information</Header>

    <FormGroup>
      <Input
        type='number'
        name='age'
        placeholder='your age'
        autoComplete='off'
        onChange= {e => setUser_age(e.target.value)}
      />
    </FormGroup>

    <FormGroup>
     <FormControl as='select'
      onChange= {e => setUser_gender(e.target.value)}>
      <option>Your gender</option>
      <option>Female</option>
      <option>Male</option>
      <option>Other</option>
     </FormControl>
    </FormGroup>

    <Button type='submit'>Next</Button>
  </Form>
 );
}
export default IntakeForm;
