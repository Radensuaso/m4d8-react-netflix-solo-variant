import React, { Component } from "react";
import MyCarouselMovie from "./MyCarouselMovie";
import { Container, Row, Carousel } from "react-bootstrap";

export default class CustomCarousel extends Component {
    render() {
        return (
            <Container fluid>
                <h4>{this.props.rowTitle}</h4>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <Row>
                            {this.props.movies &&
                                this.props.movies
                                    .filter((movie, i) => i < 6)
                                    .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {this.props.movies &&
                                this.props.movies
                                    .filter((movie, i) => i >= 2 && i < 8)
                                    .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {this.props.movies &&
                                this.props.movies
                                    .filter((movie, i) => i >= 4 && i < 10)
                                    .map((movie, i) => <MyCarouselMovie key={i} movie={movie} />)}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}
