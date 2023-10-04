import Heading from "../heading";

import ListItem from "../list-item";

import "./index.css";
import Box from "../box";

export default function AdditionalProperties ({ 
  house_rules, 
  cancellation_policy, 
  local_transportation, 
  host_languages, 
  special_offers, 
}) {
  return (
    <Box>
    <div className="details">
    <Heading border>Деталі властивості:</Heading>

    <ul className="details__list">

      <ListItem>
        <h2 className="title">House rules</h2>
        <span>{house_rules}</span>
      </ListItem>

      <ListItem>
        <h2 className="title">House rules</h2>
        <span>{cancellation_policy}</span>
      </ListItem>

      <ListItem>
        <h2 className="title">House rules</h2>
        <span>{local_transportation}</span>
      </ListItem> 

      <ListItem>
        <h2 className="title">House rules</h2>
        <span>{host_languages}</span>
      </ListItem>

      <ListItem>
        <h2 className="title">House rules</h2>
        <span>{special_offers}</span>
      </ListItem>

    </ul>
  </div>
  </Box>
  );
}