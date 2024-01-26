import React from "react"
import Input from "@/components/Input"

interface Props {
  value: string
  errorText?: string
  onChange: (e: string) => void
}

export default function InputEmail(props: Props) {
  return (
    <Input
      label={"Email"}
      onChange={props.onChange}
      value={props.value}
      type={"email"}
      errorText={props.errorText}
    />
  )
}
