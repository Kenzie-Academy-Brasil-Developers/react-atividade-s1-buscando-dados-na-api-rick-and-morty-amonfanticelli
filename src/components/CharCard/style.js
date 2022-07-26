import styled from "styled-components";

export const CharacterList = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
`;

export const ListElement = styled.li`
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px;
  width: 18%;
  height: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;

export const Img = styled.img`
  width: 70%;
  height: 80%;
`;

export const CardTitle = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
// @media screen and (min-width: 600px){
// font-family: 'Bangers', cursive;
// font-family: 'Gudea', sans-serif;
// font-family: 'Inter', sans-serif;
