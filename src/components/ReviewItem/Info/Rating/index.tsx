import React, { useMemo } from "react"
import classes from "./style.module.scss"
import Image from "next/image"
import { star } from "@/icons"
import getArrByLength from "@/utils/getArrByLength"

interface Props {
  rating: number
}

export default function Rating(props: Props) {
  const rating = useMemo(
    () =>
      getArrByLength({ end: props.rating }, (idx) => (
        <Image src={star} alt={"star"} key={idx} />
      )),
    [props.rating]
  )

  return <div className={classes.body}>{rating}</div>
}
