import React from "react"
import { useClassName } from "@/components/Button/useClassName"

export interface Props {
  text: string
  disabled?: boolean
  className?: string
  onClick: () => void
}

export default function Button(props: Props) {
  const className = useClassName(props)

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
