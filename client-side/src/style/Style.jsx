import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-bottom: 25px !important;
`;

export const FormControl = styled.option`
    decoration: none;
    background-color: white;
    margin-top: 10px;
    width: 150px !important;
    color: red;
    background: red;
`;

export const Header = styled.h4`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: #4A01FF;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: #4A01FF !important;
    color: white;
    width: 200px;
    margin-top: 10px;
  }
`;
