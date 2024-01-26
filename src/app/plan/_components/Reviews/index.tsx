import React from "react"
import classes from "./style.module.scss"
import ReviewsItems from "@/app/plan/_components/Reviews/ReviewsItems"

export default function Reviews() {
  return (
    <div className={classes.body}>
      <h3 className={classes.title}>Users love App!</h3>
      <ReviewsItems />
    </div>
  )
}
