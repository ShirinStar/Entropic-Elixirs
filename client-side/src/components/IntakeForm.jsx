import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Input } from 'reactstrap';
import { Header } from '../style/Style';

function IntakeForm(props) {
  const { handleRegister } = props
  const [ userAge, setUserAge ] = React.useState('');
  const [ userGender, setUserGender ] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = handleRegister;
    const userInfo = {
      userAge,
      userGender
    }
    submit(userInfo)
  }

return (
  <Form onSubmit={handleSubmit}>

    <Header>General Information</Header>

    <FormGroup>
      <Input
        type='number'
        name='age'
        value={userAge}
        placeholder='your age'
        autocomplete='off'
        onChange= {e => setUserAge(e.target.value)}
      />
    </FormGroup>

    <FormGroup>
     <FormControl as='select'
      value={userGender}
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
