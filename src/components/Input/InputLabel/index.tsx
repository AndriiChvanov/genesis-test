import React from "react"
import { useClassName } from "./useClassName"

export interface Props {
  className?: string
  label?: string
  disabled?: boolean
}

function InputLabel(props: Props): React.ReactElement | null {
  const className = useClassName(props)

  if (!props.label) return null

  return <span className={className}>{props.label}</span>
}

export default InputLabel
