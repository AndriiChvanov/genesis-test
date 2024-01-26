import React from "react"
import Button from "@/components/Button"

interface Props {
  onClick: () => void
}

export default function ButtonSubmit(props: Props) {
  return <Button text={"Continue"} onClick={props.onClick} />
}
