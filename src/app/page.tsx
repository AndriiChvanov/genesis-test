"use client"

import Navigate from "@/components/Navigate"
import Container from "@/components/Container"
import classes from "./style.module.scss"
import Image from "next/image"
import { loader_87 } from "@/icons"
import { useRouter } from "next/navigation"
import { Lora } from "next/font/google"
import cn from "classnames"
import { useEffect } from "react"
import HomeOptions from "@/app/_components/HomeOptions"

const lora = Lora({ subsets: ["latin"] })

export default function Home() {
  const route = useRouter()

  useEffect(() => {
    setTimeout(() => {
      route.push("/create-plan")
    }, 2000)
  }, [])

  return (
    <main>
      <Navigate />
      <Container className={classes.container}>
        <h3 className={cn(lora.className, classes.title)}>
          We are crafting <br /> your spiritual growth plan
        </h3>
        <Image src={loader_87} alt={"loader"} className={classes.loader} />
        <HomeOptions />
      </Container>
    </main>
  )
}
