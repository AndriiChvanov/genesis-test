import React from "react"
import classes from "./style.module.scss"
import Name from "@/components/ReviewItem/Info/Name"
import Rating from "@/components/ReviewItem/Info/Rating"

interface Props {
  name: string
  date: string
  rating: number
}

export default function Info(props: Props) {
  return (
    <div className={classes.body}>
      <Name name={props.name} date={props.date} />
      <Rating rating={props.rating} />
    </div>
  )
}
