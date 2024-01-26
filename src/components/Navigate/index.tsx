import React, { useCallback } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import { back, menu } from "@/icons"
import { Lora } from "next/font/google"
import cn from "classnames"
import { useRouter } from "next/navigation"

const lora = Lora({ subsets: ["latin"] })

interface Props {
  url?: string
}

export default function Navigate(props: Props) {
  const route = useRouter()

  const redirect = useCallback(() => {
    if (props.url) return route.push(props.url)
  }, [props.url])

  return (
    <div className={cn(lora.className, classes.nav)}>
      <div className={classes.arrow}>
        <Image src={back} alt={"arrow back"} onClick={redirect} />
      </div>
      <span className={classes.text}>App</span>
      <Image src={menu} alt={"menu burger"} />
    </div>
  )
}
