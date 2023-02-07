import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  margin: 5px;
  background: beige;
  border-radius: 5px;
  border: 1px solid grey;
`;

const StyledCardImg = styled.img`
  width: 50px;
`;

function Card({ imgSrc, title, description }) {
  return (
    <StyledCard>
      <StyledCardImg src={`../contents/img/${imgSrc}`} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledCard>
  );
}

export default Card;
