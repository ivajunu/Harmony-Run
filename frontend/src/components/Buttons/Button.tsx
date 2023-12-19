import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  && {
    color: #fdfdfd;
    background-color: #a01d5d;
    border: 1px solid #5c1337;
    border-radius: 10px;
    width: 150px;
    font-family: inherit;
    font-size: 20px;
  }
`;

type ButtonPrimaryProps = ButtonProps & {
  buttonLabel: string;
};

export default function ButtonPrimary(props: ButtonPrimaryProps) {
  const { buttonLabel, variant, disabled, color, onClick, size } = props;
  return (
    <>
      <StyledButton
        variant={variant}
        disabled={disabled}
        color={color}
        onClick={onClick}
        size={size}
      >
        {buttonLabel}
      </StyledButton>
    </>
  );
}
