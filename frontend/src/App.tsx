import "./App.css";
import HomePage from "./components/HomePage";
import styled from "styled-components";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #f3a3ca;
  padding: 10px;
  border-bottom: 0.5px solid #e591b9;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 20%;
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: #5c1337;
  padding: 0;
  margin: 0;
  &:focus {
    text-shadow: 1px 1px 2px lightgrey, 0 0 1em lightgrey, 0 0 0.2em lightgrey;
  }
`;

const FlowerIcon = styled.img`
  height: 80px;
  z-index: 2;
  padding: 0;
  margin: 0;
`;

export default function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomePage />, path: "/" },
        // { element: <About />, path: "/about" },
        // { element: <Contact />, path: "/contact" },
      ],
      element: <Main />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function Main() {
  return (
    <>
      <StyledNav>
        <FlowerIcon src="../public/flowericon.png" />
        <StyledUl>
          <li>
            <StyledLinks to="/">HOME</StyledLinks>
          </li>
          <li>
            <StyledLinks to="/about">ABOUT</StyledLinks>
          </li>
          <li>
            <StyledLinks to="/contact">CONTACT</StyledLinks>
          </li>
        </StyledUl>
      </StyledNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
