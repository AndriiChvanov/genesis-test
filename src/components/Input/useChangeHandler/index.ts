import React, { useCallback } from "react"

import { InputProps } from "@/components/Input"

export function useChangeHandler(props: InputProps) {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof props.onChange === "function") {
        props.onChange(event.target.value)
      }
    },
    [props.onChange]
  )
}
