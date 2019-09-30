import React, { Component } from "react";
import MyCard from "./MyCard";
import { Container, Row } from "react-bootstrap";

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="m-3">
        <Container fluid>
          <Row className="justify-content-md-center">
            {this.state.posts.map(post => (
              <MyCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              ></MyCard>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainArea;
