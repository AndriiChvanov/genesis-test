import React from "react"
import classes from "./style.module.scss"
import { Plus_Jakarta_Sans } from "next/font/google"
import cn from "classnames"

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Subscription() {
  return (
    <span className={cn(plus_jakarta_sans.className, classes.text)}>
      You are enrolling in a 3-monthly subscription to{" "}
      <span className={classes.link}>https://awesomeapp.com/subscription</span>{" "}
      with the discount price $29.99.You agree that the plan you selected will
      automatically be extended at the full price for successive renewal periods
      and you will be charged $99.99 every 3 months until you cancel the
      subscription. Payments will be charged from the card you specified here.
      You can cancel your subscription by contacting our customer support team
      via email at support@awesomeapp.com Subscription Policy. The charge will
      appear on your bill as "awesomeapp"
    </span>
  )
}
