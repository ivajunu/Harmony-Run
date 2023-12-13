import "./App.css";
import HomePage from "./components/HomePage";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// källa: https://mui.com/material-ui/react-menu/

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #f3a3ca;
  padding: 10px;
  border-bottom: 0.5px solid #e591b9;
  border-bottom-left-radius: 50%;
  /* border-bottom-right-radius: 20%; */
  box-shadow: 0 3px 10px rgb(164 157 146 / 0.2);
`;

// const StyledUl = styled.ul`
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
// `;

const StyledLinks = styled(Link)`
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

const FlowerIcon = styled.img`
  height: 80px;
  z-index: 2;
  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    background-color: #f3a3ca;
    padding: 10px;
    outline: #5c1337 solid 1px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 38px;
  color: #5c1337;
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledNav>
        <FlowerIcon src="../public/flowericon.png" />
        <StyledH1>Harmony Run</StyledH1>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon
              sx={{
                color: "black",
                width: "50px",
                height: "45px",
              }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiMenu-list": {
                padding: "0",
                margin: "0",
              },
            }}
          >
            <StyledMenuItem>
              <StyledLinks to="/">HOME</StyledLinks>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledLinks to="/about">ABOUT</StyledLinks>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledLinks to="/contact">CONTACT</StyledLinks>
            </StyledMenuItem>
          </Menu>
        </div>
      </StyledNav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
