import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinks = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 800;
  color: #a01d5d;
  padding: 0;
  margin: 0;
  &:focus {
    text-shadow: 1px 1px 2px lightgrey, 0 0 1em lightgrey, 0 0 0.2em lightgrey;
  }
`;

export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
`;

export const StyledH2 = styled("h1")`
  padding: 10px;
  margin: 10px;
  color: #a01d5d;
`;

export const StyledP = styled("p")`
  padding: 10px;
  margin: 10px;
  color: #a01d5d;
`;

export const StyledAllWorkouts = styled.div`
  padding: 10px;
  color: #a01d5d;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
  word-wrap: break-word;
  word-spacing: 2px;
`;

export const StyledButton = styled.button`
  border: none;
  text-align: left;
  color: #a01d5d;
  font-size: 28px;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  background-color: #edf6f7;
  text-decoration: underline;
  margin-bottom: 10px;
  &:focus {
    color: #791c49;
  }
`;
