import React, { useCallback, useMemo, useState } from "react"

export function useFocus() {
  const [focus, setFocus] = useState<boolean>(false)

  const onFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocus(true)
    },
    []
  )

  const onBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocus(false)
    },
    []
  )

  return useMemo(() => {
    return {
      onFocus,
      onBlur,
      focus,
    }
  }, [onBlur, onFocus, focus])
}
