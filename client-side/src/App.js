import React, { useState } from 'react';
import { Wrapper } from "./style/Style";
import IntakeForm from "./components/IntakeForm";

function app(){
  return (
    <Wrapper>
      <IntakeForm />
    </Wrapper>
  );
};
export default app;
