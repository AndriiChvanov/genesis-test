import React, { memo } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import { Lora, Plus_Jakarta_Sans } from "next/font/google"
import cn from "classnames"
import { OptionProps } from "@/components/Options"

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })
const lora = Lora({ subsets: ["latin"] })

interface Props extends OptionProps {
  className: string
}

function Option(props: Props) {
  if (props.percent)
    return (
      <div
        className={cn(
          props.className,
          plus_jakarta_sans.className,
          classes.body
        )}
      >
        {props.percent && (
          <span className={cn(lora.className, classes.percent)}>
            {props.percent}
          </span>
        )}
        <span className={classes.percent_option}>{props.title}</span>
      </div>
    )

  return (
    <div
      className={cn(props.className, plus_jakarta_sans.className, classes.body)}
    >
      {props.icon && <Image src={props.icon} alt={props.title} />}
      <span className={classes.option}>{props.title}</span>
    </div>
  )
}

export default memo(Option)
