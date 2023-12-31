// källa: https://mui.com/material-ui/react-menu/

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import {
  FlowerIcon,
  StyledH1,
  StyledLinks,
  StyledMenuItem,
  StyledNav,
} from "./App.styled";

import DailyHealth from "./components/Health/DailyHealth";
import WorkoutAdvice from "./components/Health/Workout/WorkoutAdvice";

export default function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomePage />, path: "/" },
        { element: <DailyHealth />, path: "/daily-health" },
        { element: <WorkoutAdvice />, path: "/workout-advice" },
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
        <StyledH1>
          <Link to="/">Harmony Run</Link>
        </StyledH1>
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
                color: "#f3ecef",
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
              <StyledLinks to="/">Home</StyledLinks>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledLinks to="/daily-health">Daily Health</StyledLinks>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledLinks to="/workout-advice">
                Workout for the day
              </StyledLinks>
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
