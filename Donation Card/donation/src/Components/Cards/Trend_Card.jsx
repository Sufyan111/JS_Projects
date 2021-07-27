import React from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";

export const Trend_Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src="Person.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <div className="Money">
            Donation progress: <br />
            <p>
              <b>&#8377; 7,50,000 </b> raised of &#8377; 10,00,000
            </p>
            <ProgressBar variant="primary" now={75} />
            <p>
              Created by : <i>Rahul Sharma</i>
            </p>
          </div>
          <Button variant="primary">
            <i class="fas fa-donate"></i> &nbsp;Donate
          </Button>
          <Button variant="primary">
            <i class="fas fa-share-alt"></i> &nbsp;Share
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
