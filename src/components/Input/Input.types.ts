import { ChangeEventHandler } from "react"

export interface InputProps {
  disabled?: boolean,
  error?: boolean,
  id?: string,
  label?: string,
  message?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string,
  success?: boolean,
}
