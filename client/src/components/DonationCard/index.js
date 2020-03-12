import React from 'react';
import { Link } from "react-router-dom"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
} from 'reactstrap';
import "../../App.css";


const DonationCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="cardImage" top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ62OVLNRd3yFGHdBS1a6sZBXLCIJIVye7UbBc2do4joBElEN8Z" alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle>Panera Bread</CardTitle>
          <CardSubtitle>Address: 2466 S Colorado Blvd #100, Denver, CO 80222</CardSubtitle>
          <CardText>Available Food: Bread: 10 loaves, Soup 4 gallons, Salad 5 Gallons</CardText>
          <a href ="https://www.panerabread.com/en-us/home.html"><Button>Claim</Button> </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;