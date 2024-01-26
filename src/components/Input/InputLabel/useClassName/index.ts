import { useMemo } from "react"
import classNames from "classnames"
import { Props } from "../index"
import classes from "../style.module.scss"

export function useClassName(props: Props) {
  return useMemo<string>(() => {
    return classNames(props.className, classes.label, {
      [classes.label_disabled]: props.disabled,
    })
  }, [props.className, props.disabled])
}
