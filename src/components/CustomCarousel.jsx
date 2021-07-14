import React, { Component } from "react"
import MyCarouselMovie from "./MyCarouselMovie"
import { Container, Row, Carousel } from "react-bootstrap"

export default class CustomCarousel extends Component {
  state = {
    movies: [],
  }
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery)
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery
      )
      const fetchedMovies = await response.json()
      this.setState({ movies: fetchedMovies.Search })
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => {
    this.fetchMovies()
  }

  render() {
    return (
      <Container fluid>
        <h4>{this.props.rowTitle}</h4>
        <Carousel interval={null}>
          <Carousel.Item>
            <Row>
              {this.props.movies
                .filter((movie, i) => i < 6)
                .map((movie, i) => (
                  <MyCarouselMovie key={i} movie={movie} />
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.props.movies
                .filter((movie, i) => i >= 2 && i < 8)
                .map((movie, i) => (
                  <MyCarouselMovie key={i} movie={movie} />
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.props.movies
                .filter((movie, i) => i >= 4 && i < 10)
                .map((movie, i) => (
                  <MyCarouselMovie key={i} movie={movie} />
                ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
