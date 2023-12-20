import { RadioProps } from "@mui/material/Radio";
import { ReactNode } from "react";

import { StyledFormControlLabel, StyledRadio } from "./RadioGroup.styled";

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
      sx={{
        "& .MuiTypography-root": {
          fontFamily: "inherit",
        },
      }}
    />
  );
}
