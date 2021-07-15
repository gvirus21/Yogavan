import React from "react";
import {
  MainBody,
  Container,
  SignUpButton,
  FormContainer,
  InputContainer,
  Input,
  Label,
} from "./SignupElements";

const SignUp = () => {
  return (
    <div>
      <MainBody>
        <Container>
          <FormContainer>
            <InputContainer>
              <Label>Name :</Label>
              <Input autoComplete="off" type="text" />
            </InputContainer>
            <InputContainer>
              <Label>Email :</Label>
              <Input autoComplete="off" type="email" />
            </InputContainer>
            <InputContainer>
              <Label>Password : </Label>
              <Input autoComplete="off" type="password" />
            </InputContainer>
            <InputContainer>
              <Label>Re-enter Password: </Label>
              <Input autoComplete="off" type="password" />
            </InputContainer>
          </FormContainer>
          <SignUpButton to="/">Sign Up</SignUpButton>
        </Container>
      </MainBody>
    </div>
  );
};

export default SignUp;
