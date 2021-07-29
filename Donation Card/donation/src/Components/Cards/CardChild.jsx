import React from "react";
import { Card, Button, ProgressBar, Row, Col } from "react-bootstrap";
import "./Card.css";

export const CardChild = ({
  CardTitle,
  CardImage,
  DonationAmount,
  DonationCollected,
  CreatedBy,
}) => {
  return (
    <React.Fragment>
  

      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={CardImage} />
          <Card.Body>
            <Card.Title>{CardTitle}</Card.Title>

            <div className="Money">
              Donation progress: <br />
              <p>
                <b>&#8377; {DonationCollected} </b> raised of &#8377;{" "}
                {DonationAmount}
              </p>
              <ProgressBar variant="primary" now={75} />
              <p>
                Created by : <i>{CreatedBy}</i>
              </p>
            </div>
            <div className="buttons">
              <Button variant="primary">
                <i class="fas fa-donate"></i> &nbsp;Donate
              </Button>
              <Button variant="primary">
                <i class="fas fa-share-alt"></i> &nbsp;Share
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};
