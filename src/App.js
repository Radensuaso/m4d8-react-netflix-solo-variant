import "./App.css"
import NetflixNavbar from "./components/NetflixNavbar"
import MainArea from "./components/MainArea"
import NetflixFooter from "./components/NetflixFooter"
import ShowDetails from "./components/ShowDetails"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => (
    <div className="App">
        <Router>
            <NetflixNavbar />
            <Route path="/" component={MainArea} exact />
            <Route path="/details/:imdbId" component={ShowDetails} />
            <NetflixFooter />
        </Router>
    </div>
)

export default App
