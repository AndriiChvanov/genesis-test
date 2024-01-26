import React from "react"
import classes from "./style.module.scss"
import PlanOptions from "./PlanOptions"

export default function Results() {
  return (
    <div className={classes.body}>
      <h3 className={classes.title}>
        People just like you achieved great results with App!
      </h3>
      <PlanOptions />
    </div>
  )
}
