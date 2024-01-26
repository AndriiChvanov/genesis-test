import React from "react"
import classes from "./style.module.scss"
import cn from "classnames"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Container(props: Props) {
  return (
    <div className={cn(props.className, classes.container)}>
      {props.children}
    </div>
  )
}
