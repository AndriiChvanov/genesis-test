import React, { memo } from "react"
import classes from "./style.module.scss"
import Info from "@/components/ReviewItem/Info"
import Description from "@/components/ReviewItem/Description"
import cn from "classnames"
import { Plus_Jakarta_Sans } from "next/font/google"

export interface ReviewProps {
  name: string
  date: string
  rating: number
  description: string
  id: number
}

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

interface Props extends ReviewProps {
  className?: string
}

function ReviewItem(props: Props) {
  return (
    <div
      className={cn(plus_jakarta_sans.className, props.className, classes.body)}
    >
      <Info name={props.name} date={props.date} rating={props.rating} />
      <Description description={props.description} />
    </div>
  )
}

export default memo(ReviewItem)
