import React from "react"
import Header from "@/components/Header"
import classes from "./style.module.scss"
import Footer from "@/components/Footer"

interface Props {
  children: React.ReactNode
}

export default function Wrapper(props: Props) {
  return (
    <div className={classes.wrapper}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
