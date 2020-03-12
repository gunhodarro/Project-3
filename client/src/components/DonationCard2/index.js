import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
} from 'reactstrap';
import "../../App.css";


const DonationCard2 = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="cardImage" top width="100%" top height="237.8px" src="https://cdn.vox-cdn.com/thumbor/QMwevo3Yfx2WIRYsv04TPiFqs1o=/256x0:1792x1152/1820x1213/filters:focal(256x0:1792x1152):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/48832087/12183805_10153564010116001_1992468461768025187_o.0.0.jpg" alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle>Krispy Kream Doughnuts</CardTitle>
          <CardSubtitle>Address: 16th St. 303 16th St Suite 120 80223 </CardSubtitle>
          <CardText>Available Food: Dougnuts: 133 assorted, Dougnuts holes: 350 assorted, Coffee 5 gallons, croissant 20</CardText>
          <a href ="https://www.krispykreme.com/location/denver"><Button>Claim</Button> </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard2;