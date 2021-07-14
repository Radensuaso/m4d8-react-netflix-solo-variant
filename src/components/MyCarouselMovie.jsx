import React, { Component } from "react"
import { Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

export default class MyCarouselMovie extends Component {
  state = { selected: false }
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
        <img
          onClick={() => this.setState({ selected: !this.state.selected })}
          className="d-block img-fluid"
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
        />
        {this.state.selected && <CommentArea movie={this.props.movie} />}
      </Col>
    )
  }
}
