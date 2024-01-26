import React from "react"
import classes from "./style.module.scss"
import PlanOptions from "@/app/plan/_components/WhatYouGet/PlanOptions"

export default function WhatYouGet() {
  return (
    <div className={classes.body}>
      <h3 className={classes.title}>What you get</h3>
      <PlanOptions />
    </div>
  )
}
