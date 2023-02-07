import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 15px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background: skyblue;
`;

function Button({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title || "Button"}</StyledButton>;
}

export default Button;
