// WIP, SKA BÄTTRA PÅ DENNA INFÖR EXAMENSARBETET

import { useState } from "react";
import Input from "../Inputs/Input";
import { StyledDiv } from "./SignIn.styled";
import ButtonPrimary from "../Buttons/Button";

export default function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function LogIn() {
    console.log("username:", username, "password:", password);
  }
  return (
    <>
      <StyledDiv>
        <h1 style={{ padding: "10px" }}>Sign in</h1>
        <form action="">
          <Input
            inputLabel="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <Input
            inputLabel="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
          />
          <ButtonPrimary buttonLabel="Sign in" onClick={LogIn} />
        </form>
      </StyledDiv>
      <StyledDiv>
        <p>Dont't have an account? Create a account here!</p>
      </StyledDiv>
    </>
  );
}
