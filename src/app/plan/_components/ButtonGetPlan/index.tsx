"use client"

import React, { useCallback } from "react"
import Button from "@/components/Button"
import classes from "./style.module.scss"

export default function ButtonGetPlan() {
  const handleClick = useCallback(() => console.log("Get my plan"), [])

  return (
    <Button
      text={"Get my plan"}
      onClick={handleClick}
      className={classes.button}
    />
  )
}
