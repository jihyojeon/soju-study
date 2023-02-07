import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20 20 20;
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 20px;
  margin-bottom: 10px;
  border: none;
  background-color: transparent;
`;

const StyledLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
`;

function Modal({ isModalOpen, handleModalOpen, handleAddItem }) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && img !== "" && description !== "") {
      handleAddItem({ title, img, description });
    }
    handleModalOpen(false);
    setTitle("");
    setImg("");
    setDescription("");
  };

  const modalClose = (e) => {
    handleModalOpen(false);
    setTitle("");
    setImg("");
    setDescription("");
  };

  return (
    <ModalBackground style={{ display: isModalOpen ? "flex" : "none" }}>
      <ModalContent>
        <CloseButton onClick={modalClose}>X</CloseButton>
        <StyledLabel>Name</StyledLabel>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
        <StyledLabel>Image</StyledLabel>
        <TextInput value={img} onChange={(e) => setImg(e.target.value)} />
        <StyledLabel>Content</StyledLabel>
        <TextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button title="Submit" onClick={handleSubmit}></Button>
      </ModalContent>
    </ModalBackground>
  );
}

export default Modal;
