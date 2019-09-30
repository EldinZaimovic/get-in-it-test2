import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyCard extends Component {
  render() {
    return (
      <div className="p-3 c-card">
        <Card border="light" style={{ width: "15rem", height: "29rem" }}>
          <Card.Img
            variant="top"
            src="https://loremflickr.com/320/240/travel"
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-capitalize">
              {this.props.title}
            </Card.Title>
            <Card.Text>{this.props.body.slice(0, 75)}</Card.Text>
            {/*  <Button href="/post/${this.props.title + 1`" className="card-btn" variant="primary">Go somewhere</Button> */}
            <Link class="btn btn-primary " to={`/post/${this.props.id}`}>
              Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;
