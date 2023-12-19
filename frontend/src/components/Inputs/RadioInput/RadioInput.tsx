import RadioGroup from "@mui/material/RadioGroup";
import { RadioGroupProps } from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styled from "styled-components";
import { ReactNode } from "react";

const StyledRadioDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5c1337;
  border-radius: 15px;
  background-color: #a01d5d;
  margin: 10px;
`;

const RadioDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledFormlabel = styled(FormLabel)`
  && {
    color: #fdfdfd;
    font-size: 20px;
    font-weight: 600;
    font-family: inherit;
    text-align: center;
    margin-top: 5px;
  }
`;

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
        >
          <RadioDiv> {children}</RadioDiv>
        </RadioGroup>
      </FormControl>
    </StyledRadioDiv>
  );
}
