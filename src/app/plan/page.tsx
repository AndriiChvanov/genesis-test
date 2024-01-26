"use client"

import React from "react"
import Navigate from "@/components/Navigate"
import Container from "@/components/Container"
import cn from "classnames"
import classes from "./style.module.scss"
import { Lora } from "next/font/google"
import MonthPlans from "@/app/plan/_components/MonthPlans"
import ButtonGetPlan from "@/app/plan/_components/ButtonGetPlan"
import Subscription from "@/app/plan/_components/Subscription"
import WhatYouGet from "@/app/plan/_components/WhatYouGet"
import Results from "@/app/plan/_components/Results"
import Reviews from "@/app/plan/_components/Reviews"

const lora = Lora({ subsets: ["latin"] })

export default function Plan() {
  return (
    <main>
      <Navigate url={"/progress"} />
      <Container className={cn(lora.className, classes.container)}>
        <h3 className={classes.title}>Choose your plan</h3>
        <MonthPlans />
        <ButtonGetPlan />
        <Subscription />
        <WhatYouGet />
        <Results />
        <Reviews />
        <h3 className={cn(classes.last, classes.title)}>Choose your plan</h3>
        <MonthPlans />
        <ButtonGetPlan />
        <Subscription />
      </Container>
    </main>
  )
}
