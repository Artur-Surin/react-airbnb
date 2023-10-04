import { Fragment } from "react";

import Heading from "../heading";

import ListItem from "../list-item";

import "./index.css";
import Box from "../box";

export default function nearbyAttractionsList ({ list }) {
  return (
    <Box>
      <div className="details">
        <Heading border>Пам'ятки поблизу:</Heading>


        <div className="nearbyAttractions__list">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
            ))}
        </div>
      </div>
      </Box>
  );
}


function Item ({ name, link }) {
  return (
    <ul className="details__list">
    
      <ListItem>
      <a href={link}>{name}</a>
      </ListItem>

    </ul>
  );
}