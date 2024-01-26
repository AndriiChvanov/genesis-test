import React, { useMemo } from "react"
import classes from "./style.module.scss"
import MonthPlan from "@/components/MonthPlan"

export interface MonthPlanProp {
  title: string
  price: number
  isPopular: boolean
  id: number
}

export default function MonthPlans() {
  const data: MonthPlanProp[] = useMemo(
    () => [
      { title: "1-Month Plan", price: 10, isPopular: false, id: 1 },
      {
        title: "3-Month Plan",
        price: 30,
        isPopular: true,
        id: 2,
      },
      { title: "6-Month Plan", price: 60, isPopular: false, id: 3 },
    ],
    []
  )

  return (
    <div className={classes.body}>
      {data.map((el) => (
        <MonthPlan
          title={el.title}
          price={el.price}
          isPopular={el.isPopular}
          id={el.id}
          key={el.id}
          className={classes.item}
        />
      ))}
    </div>
  )
}
