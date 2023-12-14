import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #f3a3ca;
  padding: 10px;
  border-bottom: 0.5px solid #e591b9;
  border-bottom-left-radius: 50%;
  /* border-bottom-right-radius: 20%; */
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
`;

// export const StyledUl = styled.ul`
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
// `;

export const StyledLinks = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 800;
  color: #5c1337;
  padding: 0;
  margin: 0;
  &:focus {
    text-shadow: 1px 1px 2px lightgrey, 0 0 1em lightgrey, 0 0 0.2em lightgrey;
  }
`;

export const FlowerIcon = styled.img`
  height: 80px;
  z-index: 2;
  padding: 0;
  margin: 0;
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    background-color: #f3a3ca;
    padding: 10px;
    outline: #e591b9 solid 1px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 38px;
  font-weight: 500;
  color: #5c1337;
`;
