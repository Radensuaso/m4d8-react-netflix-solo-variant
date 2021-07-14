import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import LoadingSpinner from "./LoadingSpinner"
import Alert from "react-bootstrap/Alert"
import { BiTrash } from "react-icons/bi"

class CommentArea extends Component {
  state = {
    postComment: {
      comment: "",
      rate: "",
      elementId: "",
    },

    allComments: [],

    getIsLoading: false,

    getError: false,

    submitIsLoading: false,

    submitted: { success: false, fail: false },
  }

  /* component did mount */
  componentDidMount = () => {
    this.fetchComments()
  }
  /*fetch comments */
  fetchComments = async () => {
    try {
      this.setState({ getIsLoading: true })
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjYyNjc0NjAsImV4cCI6MTYyNzQ3NzA2MH0.PbFT8PaHBhXD1sNI5QCDjBzDy7_G0CdA9lHuiHtsuNw",
          },
        }
      )

      const fetchedComments = await response.json()
      if (response.ok) {
        this.setState({ allComments: fetchedComments, getIsLoading: false })
      } else {
        this.setState({ getError: true, getIsLoading: false })
      }
    } catch (error) {
      this.setState({ getError: true, getIsLoading: false })
    }
  }

  /* Function to handle the submit */

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      this.setState({ submitIsLoading: true })
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.postComment),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjYyNjc0NjAsImV4cCI6MTYyNzQ3NzA2MH0.PbFT8PaHBhXD1sNI5QCDjBzDy7_G0CdA9lHuiHtsuNw",

            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        this.setState({
          postComment: {
            comment: "",
            rate: "",
            elementId: "",
          },
          submitted: { ...this.state.submitted, success: true },
          submitIsLoading: false,
        })
        this.fetchComments()
      } else {
        this.setState({
          submitted: { ...this.state.submitted, fail: true },
          submitIsLoading: false,
        })
      }
    } catch (error) {
      this.setState({
        submitted: { ...this.state.submitted, fail: true },
        submitIsLoading: false,
      })
    }
  }

  /*Function to delete comment from the api */
  deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjYyNjc0NjAsImV4cCI6MTYyNzQ3NzA2MH0.PbFT8PaHBhXD1sNI5QCDjBzDy7_G0CdA9lHuiHtsuNw",
          },
        }
      )
      if (response.ok) {
        alert("The comment was deleted with success")
        this.fetchComments()
      } else {
        this.setState({ error: true })
      }
    } catch (error) {
      this.setState({ error: true })
    }
  }

  /* function to handle the state */
  handleStateComment = (commentRate, value, id) => {
    this.setState({
      postComment: {
        ...this.state.postComment,
        [commentRate]: value,
        elementId: id,
      },
    })
  }

  render() {
    return (
      <div className="comment-area d-flex flex-column align-items-center p-4">
        <div>
          <h4 className="my-4">{this.props.movie.Title}</h4>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "comment",
                  e.currentTarget.value,
                  this.props.movie.imdbID
                )
              }
              as="textarea"
              rows={3}
              placeholder="Add a comment!"
              value={this.state.postComment.comment}
            />
            <Form.Control
              onChange={(e) =>
                this.handleStateComment(
                  "rate",
                  e.currentTarget.value,
                  this.props.movie.imdbID
                )
              }
              className="my-2"
              type="number"
              placeholder="1 to 5 rate the book!"
              value={this.state.postComment.rate}
            />
            <div className="d-flex align-items-center">
              <Button className="my-2 mr-2" variant="success" type="submit">
                Submit
              </Button>
              {this.state.submitIsLoading && <LoadingSpinner />}
            </div>
          </form>
          {this.state.submitted.success && (
            <Alert variant="success">
              Your comment was submitted with success!
            </Alert>
          )}
          {this.state.submitted.fail && (
            <Alert variant="danger">
              Something went wrong with your submission.
            </Alert>
          )}
        </div>
        <div className="w-100 mt-4">
          {this.state.getError && (
            <Alert variant="danger">
              Something went wrong on loading the book comments.
            </Alert>
          )}
          {this.state.getIsLoading ? (
            <LoadingSpinner className="mt-4" />
          ) : (
            this.state.allComments
              .filter(
                (comment) => comment.elementId === this.props.movie.imdbID
              )
              .map((comment) => (
                <div className="border rounded p-3 mb-4" key={comment._id}>
                  <p>
                    <strong>Comment: </strong>
                    {comment.comment}
                  </p>
                  <p>
                    <strong>Rate: </strong>
                    {comment.rate}
                  </p>
                  <Button
                    onClick={() => this.deleteComment(comment._id)}
                    variant="danger"
                  >
                    <BiTrash />
                  </Button>
                </div>
              ))
          )}
        </div>
      </div>
    )
  }
}

export default CommentArea
