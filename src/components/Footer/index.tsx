import React from "react"
import Image from "next/image"
import { bottom_bar } from "@/icons"
import classes from "./style.module.scss"

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={bottom_bar} alt={"Footer"} className={classes.icon} />
    </footer>
  )
}
