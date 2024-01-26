import React, { useMemo } from "react"
import classes from "./style.module.scss"
import ReviewItem, { ReviewProps } from "@/components/ReviewItem"

export default function ReviewsItems() {
  const reviews: ReviewProps[] = useMemo(
    () => [
      {
        name: "Guadalupe Hudson",
        date: "2 January 2024",
        description:
          "All I want to know if you are working on another agent A game or chapters. Loved this game!",
        rating: 5,
        id: 1,
      },
      {
        name: "Bobby Wintheiser",
        date: "27 December 2023",
        description: "I’ve played this over and over and I love it!",
        rating: 5,
        id: 2,
      },
      {
        name: "Colleen Beahan",
        date: "19 December 2023",
        description:
          "Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would",
        rating: 5,
        id: 3,
      },
    ],
    []
  )
  return (
    <div className={classes.body}>
      {reviews.map((el) => (
        <ReviewItem
          name={el.name}
          date={el.date}
          rating={el.rating}
          id={el.id}
          description={el.description}
          key={el.id}
          className={classes.item}
        />
      ))}
    </div>
  )
}
