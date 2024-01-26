"use client"

import Navigate from "@/components/Navigate"
import Container from "@/components/Container"
import classes from "./style.module.scss"
import { Lora } from "next/font/google"
import cn from "classnames"
import Email from "@/app/create-plan/_components/Email"

const lora = Lora({ subsets: ["latin"] })

export default function CreatePlan() {
  return (
    <div>
      <Navigate url={"/"} />
      <Container className={cn(lora.className, classes.container)}>
        <h3 className={classes.title}>
          Enter your email to get <br /> your personalised <br />
          Spiritual Growth Plan
        </h3>
        <Email />
      </Container>
    </div>
  )
}
