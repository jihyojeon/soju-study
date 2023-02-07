import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledSideBar = styled.nav`
  align-self: flex-start;
  padding: 0px;
  margin: 0px;
  height: 300px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 10px;
  background: beige;
  border-radius: 5px;
`;

function SideBar({ children, onClick }) {
  return (
    <StyledSideBar>
      <Button title="Add New" onClick={onClick} />
      <StyledList>
        {children.map((child) => (
          <li>{child.title}</li>
        ))}
      </StyledList>
    </StyledSideBar>
  );
}

export default SideBar;
