import { useMemo } from "react"
import classNames from "classnames"
import classes from "../style.module.scss"
import { Props } from "@/components/Button"
import { Plus_Jakarta_Sans } from "next/font/google"

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export function useClassName(props: Props) {
  return useMemo<string>(() => {
    return classNames(
      plus_jakarta_sans.className,
      props.className,
      classes.button,
      {
        [classes.button_disabled]: props.disabled,
      }
    )
  }, [props.className, props.disabled])
}
