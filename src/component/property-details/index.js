import Heading from "../heading";

import ListItem from "../list-item";
import guestIcon from "./guest.svg";
import guestIcon1 from "./bedrooms.svg";
import guestIcon2 from "./bads.svg";
import guestIcon3 from "./baths.svg";

import "./index.css";
import Box from "../box";

export default function PropertyDetails ({ guests, bedrooms, beds, baths}) {
  return (
    <Box>
    <div className="details">
    <Heading border>Деталі властивості:</Heading>

    <ul className="details__list">
    <ListItem imageSrc={guestIcon}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={guestIcon1}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={guestIcon2}>
        <span>{beds} ліжко</span>
      </ListItem> 

      <ListItem imageSrc={guestIcon3}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  </div>
  </Box>
  );
}