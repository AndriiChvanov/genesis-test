import { useMemo } from "react"
import classNames from "classnames"
import classes from "../style.module.scss"
import { InputProps } from "../index"
import { Inter } from "next/font/google"

interface Args {
  isError: boolean
}

const inter = Inter({ subsets: ["latin"] })

export function useClassName(props: InputProps, args: Args) {
  return useMemo<string>(() => {
    return classNames(inter.className, props.className, classes.body, {
      [classes.body_error]: args.isError,
      [classes.body_disabled]: props.disabled,
    })
  }, [props.className, args.isError, props.disabled])
}
