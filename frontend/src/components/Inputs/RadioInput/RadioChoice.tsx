import Radio from "@mui/material/Radio";
import { RadioProps } from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ReactNode } from "react";
import styled from "styled-components";

const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
  }
`;

const StyledRadio = styled(Radio)`
  .Mui-checked {
    color: aliceblue;
  }
`;

type RadioChoiceProps = RadioProps & {
  formvalue?: ReactNode;
  choiceLabel: string;
  checked?: boolean;
  radioId: string;
};

export default function RadioChoice(props: RadioChoiceProps) {
  const { formvalue, choiceLabel, checked, radioId, onChange, value } = props;
  return (
    <StyledFormControlLabel
      value={formvalue}
      labelPlacement="bottom"
      control={
        <StyledRadio
          checked={checked}
          id={radioId}
          value={value}
          onChange={onChange}
          sx={{
            "&.MuiButtonBase-root": {
              "&.MuiRadio-root": {
                "&.Mui-checked": {
                  color: "white",
                },
              },
            },
          }}
        />
      }
      label={choiceLabel}
    />
  );
}
