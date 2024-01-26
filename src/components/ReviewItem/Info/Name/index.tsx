import React from "react"
import classes from "./style.module.scss"

interface Props {
  name: string
  date: string
}

export default function Name(props: Props) {
  return (
    <div className={classes.body}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.date}>{props.date}</span>
    </div>
  )
}
