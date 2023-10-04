import { Fragment } from "react";

import Heading from "../heading";

import Box from "../box";
import "./index.css";


export default function ReviewsList({ list }) {
  return ( 
  <div className="reviews__block">
    <Heading >Відгуки клієнтів</Heading>

    <div className="reviews__list">
      {list.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </div>
  </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__top">
        <p className="reviews__name">{guestName}</p>
        <span className="reviews__rating">Рейтинг: {rating}</span>
      </div>
      <span className="reviews__text">
        {review}
        </span>
    </Box>
  );
}