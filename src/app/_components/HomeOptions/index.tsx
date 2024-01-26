import React, { useMemo } from "react"
import Options, { OptionProps } from "@/components/Options"
import { ai, circle_check, grid, text } from "@/icons"

export default function HomeOptions() {
  const options = useMemo<OptionProps[]>(
    () => [
      { title: "Aligning with your goals", id: 1, icon: circle_check },
      { title: "Reviewing your answers", id: 2, icon: grid },
      {
        title: "Picking Bible verses and prayers for you",
        id: 3,
        icon: text,
      },
      { title: "Finalizing your personalized plan", id: 4, icon: ai },
    ],
    []
  )
  return <Options data={options} />
}
