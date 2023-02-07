import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Modal from "../components/Modal";
import gods from "../contents/gods.json";
import { useState } from "react";

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

const StyledBody = styled.body`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  padding: 50px;
`;

function Main() {
  const [data, setData] = useState(Object.values(gods));
  const handleAddItem = (item) => {
    setData([...data, item]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = (open) => setIsModalOpen(open);

  return (
    <StyledBody>
      <Header />
      <StyledMain>
        <SideBar children={data} onClick={handleModalOpen} />
        <CardList children={data} />
      </StyledMain>
      <Modal
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleAddItem={handleAddItem}
      />
    </StyledBody>
  );
}

export default Main;
