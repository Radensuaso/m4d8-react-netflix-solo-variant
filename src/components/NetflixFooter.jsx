import { Container, Row, Col } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const NetflixFooter = () => (
  <footer className="mt-5">
    <Container>
      <Row>
        <Col xs={12} className="mb-2">
          <FaFacebookSquare className="mr-2" />
          <FaInstagram className="mr-2" />
          <FaTwitter className="mr-2" />
          <FaYoutube />
        </Col>
        <Col xs={6} lg={3}>
          <p className="text-nowrap">Audio and Subtitles</p>
          <p className="text-nowrap">Media Center</p>
          <p className="text-nowrap">Privacy</p>
          <p className="text-nowrap">Contact us</p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="text-nowrap">Audio Description</p>
          <p className="text-nowrap">Investor Relations</p>
          <p className="text-nowrap">Legal Notices</p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="text-nowrap">Help Center</p>
          <p className="text-nowrap">Jobs</p>
          <p className="text-nowrap">Cookie Preferences</p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="text-nowrap">Gift Cards</p>
          <p className="text-nowrap">Terms of Use</p>
          <p className="text-nowrap">Corporate Information</p>
        </Col>
        <Col xs={12} className="mb-2 my-4">
          <a className="service-code" href="/">
            Service Code
          </a>
        </Col>
        <Col xs={12} className="mb-2">
          <p id="copyright">
            {/* &reg;1997 - 2019 Netflix, Inc. {i-0d00fcda2fdf9c0de} */}
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default NetflixFooter
