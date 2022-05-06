import { FC } from "react"

import { InputProps } from "./Input.types"
import {
  StyledInput,
  StyledLabel,
  StyledMessage,
  StyledText
} from "./input-styles"

const Input: FC<InputProps> = ({
  disabled, error, id,
  label, message, onChange,
  placeholder, success, ...props
}) => {
  return (
    <>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>{label}</StyledText>
      </StyledLabel>
      <StyledInput
        disabled={disabled}
        error={error}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        success={success}
        type="text"
        {...props}
      />
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </>
  )
}

export default Input
