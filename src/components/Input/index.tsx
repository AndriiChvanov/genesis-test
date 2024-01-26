import React, { HTMLInputTypeAttribute } from "react"
import classes from "./style.module.scss"

import { useFocus } from "@/hooks/useFocus"
import InputLabel from "@/components/Input/InputLabel"
import ErrorText from "@/components/Input/ErrorText"
import { useClassName } from "@/components/Input/useClassName"
import { useChangeHandler } from "@/components/Input/useChangeHandler"

export interface InputProps {
  className?: string
  placeholder?: string
  label?: string
  value?: string
  errorText?: string
  onChange?: (value: string) => void
  disabled?: boolean
  type?: HTMLInputTypeAttribute
  name?: string
}

export default function Input(props: InputProps) {
  const { onFocus, onBlur, focus } = useFocus()
  const changeHandler = useChangeHandler(props)

  const isError = !!props.errorText

  const className = useClassName(props, { isError })

  const { value = "" } = props
  return (
    <div className={className}>
      <InputLabel
        label={props.label}
        disabled={props.disabled}
        className={classes.label}
      />
      <input
        className={classes.input}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        onChange={changeHandler}
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type ?? "text"}
        name={props.name}
      />
      <ErrorText text={props.errorText} isError={isError} />
    </div>
  )
}
