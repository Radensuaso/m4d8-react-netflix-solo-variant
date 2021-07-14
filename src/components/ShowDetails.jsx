import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import CommentArea from "./CommentArea"

const ShowDetails = (props) => {
  const [selectedMovie, setSelectedMovie] = useState({})

  //function to fetch movies by imdbID
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=efd210c7&i=" + props.match.params.imdbId
      )
      const fetchedMovie = await response.json()
      console.log(fetchedMovie)
      if (response.ok) {
        setSelectedMovie(fetchedMovie)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    selectedMovie && (
      <Container fluid id="show-details">
        <h1 className="text-center">{selectedMovie.Title}</h1>
        <Row className="justify-content-center mt-4">
          <Col xs={12} sm={8} md={6} lg={4} className="mb-3">
            <img
              className="img-fluid"
              src={selectedMovie.Poster}
              alt={selectedMovie.Title + " Picture"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4}>
            <p>
              <strong>Director: </strong> {selectedMovie.Director}
            </p>
            <p>
              <strong>Actors: </strong> {selectedMovie.Actors}
            </p>
            <p>
              <strong>Plot: </strong> {selectedMovie.Plot}
            </p>
            <p>
              <strong>Language: </strong> {selectedMovie.Language}
            </p>
            <p>
              <strong>Runtime: </strong> {selectedMovie.Runtime}
            </p>
            <p>
              <strong>IMDB Rating: </strong> {selectedMovie.imdbRating}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} sm={8} md={6} lg={4}>
            <CommentArea movie={selectedMovie} />
          </Col>
        </Row>
      </Container>
    )
  )
}

export default ShowDetails
