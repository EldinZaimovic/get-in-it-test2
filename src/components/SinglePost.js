import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const ID = this.props.match.params.id;
    fetch(`http://jsonplaceholder.typicode.com/posts/${ID}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="m-3">
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-capitalize pt-3">{this.state.posts.title}</h1>
            <Col xs={12}>
              <Image
                className="m-2"
                src="https://loremflickr.com/320/240/travel"
                thumbnail
              />
            </Col>
            <p className="para pt-4">{this.state.posts.body}.</p>
          </Row>
          <Link to={`/`}>Back to Home</Link>
        </Container>
      </div>
    );
  }
}

export default MainArea;
