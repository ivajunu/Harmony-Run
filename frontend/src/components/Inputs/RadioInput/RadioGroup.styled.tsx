import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { FormLabel } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
  }
`;

export const StyledRadio = styled(Radio)`
  .Mui-checked {
    color: aliceblue;
  }
`;

export const StyledRadioDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5c1337;
  border-radius: 15px;
  background-color: #a01d5d;
  margin: 10px;
`;

export const RadioDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFormlabel = styled(FormLabel)`
  && {
    color: #fdfdfd;
    font-size: 20px;
    font-weight: 600;
    font-family: inherit;
    text-align: center;
    margin-top: 5px;
  }
`;
