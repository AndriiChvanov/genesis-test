import React, { memo } from "react"
import { Plus_Jakarta_Sans } from "next/font/google"
import classes from "./style.module.scss"
import cn from "classnames"
import Image from "next/image"
import { radio } from "@/icons"
import { MonthPlanProp } from "@/app/plan/_components/MonthPlans"

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

interface Props extends MonthPlanProp {
  className?: string
}

function MonthPlan(props: Props) {
  return (
    <div
      className={cn(plus_jakarta_sans.className, props.className, classes.body)}
    >
      {props.isPopular && (
        <div className={classes.popular}>
          <span>MOST POPULAR</span>
        </div>
      )}
      <div className={classes.row}>
        <Image src={radio} alt={"radio"} />
        <span className={classes.title}>{props.title}</span>
        <div className={classes.price}>
          <span className={classes.symbol}>$</span>
          <span className={classes.text}>{props.price}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(MonthPlan)
