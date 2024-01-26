import React from "react"
import classes from "./style.module.scss"

interface Props {
  description: string
}

export default function Description(props: Props) {
  return (
    <div className={classes.body}>
      <span className={classes.description}>{props.description}</span>
    </div>
  )
}
