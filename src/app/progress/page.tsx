"use client"

import React from "react"
import classes from "./style.module.scss"
import Navigate from "@/components/Navigate"
import cn from "classnames"
import Container from "@/components/Container"
import { Lora } from "next/font/google"
import { progress_bar } from "@/icons"
import Image from "next/image"
import ButtonSubmit from "@/app/progress/_components/ButtonSubmit"

const lora = Lora({ subsets: ["latin"] })

export default function Progress() {
  return (
    <main>
      <Navigate url={"/create-plan"} />
      <Container className={cn(lora.className, classes.container)}>
        <h3 className={classes.title}>
          See your Spiritual Growth <br />
          progress by Sep 17, 2024
        </h3>
        <Image
          src={progress_bar}
          alt={"progress_bar"}
          className={classes.bar}
        />
        <ButtonSubmit className={classes.button} />
      </Container>
    </main>
  )
}
