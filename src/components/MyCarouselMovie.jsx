import { Col } from "react-bootstrap"
import { withRouter } from "react-router-dom"

const MyCarouselMovie = (props) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
      <img
        onClick={() => props.history.push("/details/" + props.movie.imdbID)}
        className="d-block img-fluid"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />
    </Col>
  )
}

export default withRouter(MyCarouselMovie)
