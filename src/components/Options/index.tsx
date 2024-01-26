import React from "react"
import classes from "./style.module.scss"
import Option from "./Option"
import cn from "classnames"

export interface OptionProps {
  title: string
  id: number
  icon?: string
  percent?: string
}

interface Props {
  data: OptionProps[]
  className?: string
}

export default function Options(props: Props) {
  return (
    <div className={cn(props.className, classes.options)}>
      {props.data.map((el) => (
        <Option
          title={el.title}
          id={el.id}
          key={el.id}
          icon={el.icon}
          percent={el.percent}
          className={classes.option}
        />
      ))}
    </div>
  )
}
