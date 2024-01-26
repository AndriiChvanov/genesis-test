import React from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import { camera, stack, time } from "@/icons"

interface Props {}

export default function Header(props: Props) {
  return (
    <header className={classes.header}>
      <Image src={time} alt={"phone time"} className={classes.time} />
      <Image src={camera} alt={"phone camera"} className={classes.camera} />
      <Image src={stack} alt={"phone stack"} className={classes.stack} />
    </header>
  )
}
