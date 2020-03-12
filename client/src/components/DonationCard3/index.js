import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
} from 'reactstrap';
import "../../App.css";


const DonationCard3 = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="cardImage" top width="100%" top height="237.8px" src="https://a.mktgcdn.com/p/emtQ8JbtI_PTABsdUSPg6ilu9jFJI7_G2X1h5j55EjU/2573x2299.jpg" alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle>King Soopers</CardTitle>
          <CardSubtitle>Address: 5301 West 38Th Ave Wheat Ridge, CO 80212</CardSubtitle>
          <CardText>Available Food: 27 pies assorted, pallet assorted canned goods, bakery items</CardText>
          <a href ="https://www.kingsoopers.com/stores/details/620/00057"><Button>Claim</Button> </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard3;