import React, { useMemo } from "react"
import Options, { OptionProps } from "@/components/Options"
import classes from "./style.module.scss"

export default function PlanOptions() {
  const options = useMemo<OptionProps[]>(
    () => [
      {
        title:
          "️of users were able to feel the power of prayer after just 6 weeks",
        id: 1,
        percent: "71%",
      },
      {
        title:
          "of users started to have a meaningful daily routine and peaceful mind",
        id: 2,
        percent: "65%",
      },
      {
        title: "of users struggled with finding time for daily praying",
        id: 3,
        percent: "47%",
      },
    ],
    []
  )
  return <Options data={options} className={classes.body} />
}
