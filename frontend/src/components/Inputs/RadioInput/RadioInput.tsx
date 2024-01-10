import RadioGroup from "@mui/material/RadioGroup";
import { RadioGroupProps } from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { ReactNode } from "react";

import { RadioDiv, StyledFormlabel, StyledRadioDiv } from "./RadioGroup.styled";

type RadioInputProps = RadioGroupProps & {
  children: ReactNode;
  formId: string;
  formLabel: string;
  ariaLabel: string;
  radioGroupName: string;
};

export default function RadioInput(props: RadioInputProps) {
  const {
    children,
    formId,
    formLabel,
    ariaLabel,
    radioGroupName,
    onChange,
    value,
    id,
  } = props;
  return (
    <StyledRadioDiv>
      <FormControl>
        <StyledFormlabel
          id={formId}
          sx={{
            "&.MuiFormLabel-root": {
              "&.Mui-focused": {
                color: "white",
              },
            },
          }}
        >
          {formLabel}
        </StyledFormlabel>
        <RadioGroup
          aria-labelledby={ariaLabel}
          name={radioGroupName}
          onChange={onChange}
          value={value}
          id={id}
        >
          <RadioDiv> {children}</RadioDiv>
        </RadioGroup>
      </FormControl>
    </StyledRadioDiv>
  );
}
