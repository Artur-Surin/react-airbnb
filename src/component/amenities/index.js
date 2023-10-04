import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import guestIcon from "./pool.svg";
import guestIcon1 from "./gym.svg";
import guestIcon2 from "./breackfast.svg";
import guestIcon3 from "./wifi.svg";
import guestIcon4 from "./parking.svg";
import guestIcon5 from "./animals.svg";
import guestIcon6 from "./airport-shuttle.svg";
import guestIcon7 from "./security-group.svg";
import guestIcon8 from "./meeting-room.svg";
import guestIcon9 from "./child.svg";

import "./index.css";

export default function Amenities ({ 
  hasPool, 
  hasGym, 
  hasFreeBreakfast, 
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly
}) {
  return (
    <Box>
    <div className="details">
    <Heading border>Зручності:</Heading>

    <ul className="details__list">
    <ListItem imageSrc={guestIcon}>
        <span>{hasPool} Басейн</span>
      </ListItem>

      <ListItem imageSrc={guestIcon1}>
        <span>{hasGym} Спортивний зал</span>
      </ListItem>

      <ListItem imageSrc={guestIcon2}>
        <span>{hasFreeBreakfast} Безкоштовний сніданок</span>
      </ListItem> 

      <ListItem imageSrc={guestIcon3}>
        <span>{hasFreeWiFi} Безкоштовний WI-FI</span>
      </ListItem>

      <ListItem imageSrc={guestIcon4}>
        <span>{hasParking} Безкоштовний вуличний паркінг</span>
      </ListItem>

      <ListItem imageSrc={guestIcon5}>
        <span>{hasPetsAllowed} Дозволено розміщення з домашніми тваринами</span>
      </ListItem>

      <ListItem imageSrc={guestIcon6}>
        <span>{hasAirportShuttle} Трансфер до/з аеропорту</span>
      </ListItem>

      <ListItem imageSrc={guestIcon7}>
        <span>{hasConciergeService} Консьєрж сервіс</span>
      </ListItem>

      <ListItem imageSrc={guestIcon8}>
        <span>{hasRoomService} Обслуговування номерів</span>
      </ListItem>

      <ListItem imageSrc={guestIcon9}>
        <span>{hasChildFriendly} Підходить для дітей</span>
      </ListItem>
    </ul>
  </div>
  </Box>
  );
}