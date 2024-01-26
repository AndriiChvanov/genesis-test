import React, { useMemo } from "react"
import Options, { OptionProps } from "@/components/Options"
import { check } from "@/icons"
import classes from "./style.module.scss"

export default function PlanOptions() {
  const options = useMemo<OptionProps[]>(
    () => [
      {
        title: "️You wake up feeling motivated and energized",
        id: 1,
        icon: check,
      },
      {
        title: "You start your day in harmony with prayer",
        id: 2,
        icon: check,
      },
      {
        title: "Your relationships are stronger than ever",
        id: 3,
        icon: check,
      },
      {
        title: "You’re committed to spiritual growth and self-improvement",
        id: 4,
        icon: check,
      },
      {
        title: "You grow closer to God through everyday Bible reading",
        id: 5,
        icon: check,
      },
    ],
    []
  )
  return <Options data={options} className={classes.body} />
}
