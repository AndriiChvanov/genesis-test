"use client"

import React, { useCallback } from "react"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"

interface Props {
  className?: string
}

export default function ButtonSubmit(props: Props) {
  const route = useRouter()

  const handleClick = useCallback(() => route.push("/plan"), [])

  return (
    <Button
      text={"Continue"}
      onClick={handleClick}
      className={props.className}
    />
  )
}
