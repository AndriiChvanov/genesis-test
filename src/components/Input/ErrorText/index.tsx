import React from "react"
import classNames from "classnames"
import classes from "./style.module.scss"

interface Props {
  className?: string
  text?: string
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  isError?: boolean
}

function ErrorText(props: Props): React.ReactElement | null {
  if (
    typeof props.text !== "string" ||
    (typeof props.isError === "boolean" && !props.isError)
  ) {
    return null
  }

  return (
    <span
      className={classNames(props.className, classes.error_text)}
      onClick={props.onClick}
    >
      {props.text}
    </span>
  )
}

export default ErrorText
