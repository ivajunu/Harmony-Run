import { InputBaseProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

type InputProps = InputBaseProps & {
  inputLabel: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "password";
};

const StyledInput = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #a01d5d;
    & .MuiInputLabel-root {
      color: #a01d5d;
    }
  }
`;

export default function Input(props: InputProps) {
  const { inputLabel, onChange, value, disabled, ariaLabel, type } = props;

  return (
    <div style={{ padding: "5px" }}>
      <StyledInput
        label={inputLabel}
        variant="outlined"
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-label={ariaLabel}
        type={type}
      />
    </div>
  );
}
