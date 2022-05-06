import { FC } from "react"

import { ButtonProps } from "./Button.types"
import { StyledButton } from "./button-styles"

const Button: FC<ButtonProps> = ({ disabled, onClick, primary, size, text, ...props}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      primary={primary}
      size={size}
      type="button"
      {...props}
    >
      {text}
    </StyledButton>
  )
}

export default Button
