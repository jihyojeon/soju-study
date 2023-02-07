import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 24px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return <StyledHeader>Final Fantasy XIV - The Twelve</StyledHeader>;
}

export default Header;
