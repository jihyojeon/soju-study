import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCardList = styled.article`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  overflow-y: auto;
  height: 100%;
`;

function CardList({ children }) {
  return (
    <StyledCardList>
      {children.map((child) => (
        <Card
          title={child.title}
          imgSrc={child.img}
          description={child.description}
        />
      ))}
    </StyledCardList>
  );
}

export default CardList;
