import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  font-size: 15px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

function TextInput({ value, onChange }) {
  return <StyledTextInput value={value} onChange={onChange} />;
}

export default TextInput;
