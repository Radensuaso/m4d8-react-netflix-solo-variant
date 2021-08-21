import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";
import Alert from "react-bootstrap/Alert";
import { BiTrash } from "react-icons/bi";

class CommentArea extends Component {
  state = {
    postReview: {
      comment: "",
      rate: "",
      elementId: this.props.mediaAndReviews.imdbID,
    },

    mediaReviews: [],

    submitIsLoading: false,

    submitted: false,

    submitFailed: false,
  };

  /* Function to handle the submit */

  handleSubmit = async (e, mediaId) => {
    e.preventDefault();
    try {
      this.setState({ submitIsLoading: true });
      const response = await fetch(
        `${process.env.REACT_APP_BE_BASE_URL}/media/${mediaId}/reviews`,
        {
          method: "POST",
          body: JSON.stringify(this.state.postReview),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        this.setState({
          postReview: {
            comment: "",
            rate: "",
            elementId: this.props.mediaAndReviews.imdbID,
          },
          submitted: true,
          submitIsLoading: false,
        });
        this.props.fetchMedia();
      } else {
        this.setState({
          submitIsLoading: false,
          submitFailed: true,
        });
      }
    } catch (error) {
      this.setState({
        submitted: { ...this.state.submitted, fail: true },
        submitIsLoading: false,
      });
    }
  };

  /*Function to delete comment from the api */
  deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_BASE_URL}/media/reviews/${commentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("The comment was deleted with success");
        this.props.fetchMedia();
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true });
    }
  };

  /* function to handle the state */
  handleStateComment = (commentRate, value) => {
    this.setState({
      postReview: {
        ...this.state.postReview,
        [commentRate]: value,
      },
    });
  };

  //********************* component did Mount ****************
  componentDidMount = () => {
    this.setState({ mediaReviews: this.props.mediaAndReviews.reviews });
  };

  // ************** Component did Update *****************
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.mediaAndReviews.reviews !== this.props.mediaAndReviews.reviews
    ) {
      this.setState({ mediaReviews: this.props.mediaAndReviews.reviews });
    }
  }

  render() {
    return (
      <div className="comment-area d-flex flex-column align-items-center">
        <div className="w-100">
          <h4 className="my-4">{this.props.mediaAndReviews.media.Title}</h4>

          <form
            onSubmit={(e) =>
              this.handleSubmit(e, this.props.mediaAndReviews.media.imdbID)
            }
          >
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "comment",
                  e.currentTarget.value,
                  this.props.mediaAndReviews.media.imdbID
                )
              }
              as="textarea"
              rows={3}
              placeholder="Add a comment!"
              value={this.state.postReview.comment}
            />
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "rate",
                  e.currentTarget.value,
                  this.props.mediaAndReviews.media.imdbID
                )
              }
              className="my-2"
              type="number"
              placeholder="1 to 5 rate the book!"
              value={this.state.postReview.rate}
            />
            <div className="d-flex align-items-center">
              <Button className="my-2 mr-2" variant="success" type="submit">
                Submit
              </Button>
              {this.state.submitIsLoading && <LoadingSpinner />}
            </div>
          </form>
          {this.state.submitted && (
            <Alert variant="success">
              Your comment was submitted with success!
            </Alert>
          )}
          {this.state.submitFailed && (
            <Alert variant="danger">
              Something went wrong with your submission.
            </Alert>
          )}
        </div>
        <div className="w-100 mt-4">
          {this.state.mediaReviews &&
            this.state.mediaReviews.map((r) => (
              <div className="border rounded p-3 mb-4" key={r._id}>
                <p>
                  <strong>Comment: </strong>
                  {r.comment}
                </p>
                <p>
                  <strong>Rate: </strong>
                  {r.rate}
                </p>
                <Button
                  onClick={() => this.deleteComment(r._id)}
                  variant="danger"
                >
                  <BiTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default CommentArea;
