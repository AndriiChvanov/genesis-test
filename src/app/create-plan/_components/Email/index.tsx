import React, { useCallback, useState } from "react"
import classes from "./style.module.scss"
import { useRouter } from "next/navigation"
import InputEmail from "@/app/create-plan/_components/Email/InputEmail"
import ButtonSubmit from "@/app/create-plan/_components/Email/ButtonSubmit"

export default function Email() {
  const [inputValue, setInputValue] = useState<string>("")
  const [errorText, setErrorText] = useState<string | undefined>(undefined)
  const route = useRouter()

  const onChange = useCallback(
    (e: string) => {
      setInputValue(e)
      errorText && setErrorText(undefined)
    },
    [errorText, setInputValue, inputValue, setErrorText]
  )

  const handeSubmit = useCallback(() => {
    if (validateEmail(inputValue)) {
      route.push(`/progress`)
      console.log(inputValue)
    } else {
      setErrorText("Wrong Email")
    }
  }, [inputValue, errorText])

  return (
    <div className={classes.body}>
      <InputEmail
        value={inputValue}
        onChange={onChange}
        errorText={errorText}
      />
      <ButtonSubmit onClick={handeSubmit} />
    </div>
  )
}

function validateEmail(email: string) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return re.test(String(email).toLowerCase())
}
