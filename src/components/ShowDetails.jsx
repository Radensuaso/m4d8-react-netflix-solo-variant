import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import CommentArea from "./CommentArea";

const ShowDetails = (props) => {
  const [selectedMediaAndReviews, setSelectedMediaAndReviews] = useState([]);

  //function to fetch movies by imdbID
  const fetchMedia = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_BASE_URL}/media/${props.match.params.imdbId}`
      );
      if (response.ok) {
        const fetchedMediaAndReviews = await response.json();
        setSelectedMediaAndReviews(fetchedMediaAndReviews);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid id="show-details">
      {selectedMediaAndReviews.media && (
        <>
          <h1 className="text-center">{selectedMediaAndReviews.media.Title}</h1>
          <Row className="justify-content-center mt-4">
            <Col xs={12} sm={8} md={6} lg={4} className="mb-3">
              <img
                className="img-fluid"
                src={selectedMediaAndReviews.media.Poster}
                alt={selectedMediaAndReviews.media.Title + " Picture"}
              />
            </Col>
            {/* 
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
          </Col> */}
          </Row>
          <Row className="justify-content-center mt-4">
            <Col xs={12} sm={8} md={6} lg={4}>
              <CommentArea
                mediaAndReviews={selectedMediaAndReviews}
                fetchMedia={fetchMedia}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ShowDetails;
