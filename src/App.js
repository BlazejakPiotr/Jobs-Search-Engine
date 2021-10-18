import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./Components/Searchbar";
import JobList from "./Components/JobList";
import CompanyDetail from "./Components/CompanyDetail";

function App() {
  const [query, setQuery] = useState([]);

  return (
    <div className="App">
      <Router>
        <Container>
          <Row>
            <Col className="text-center mt-3">
              <Link to="/">
                <h1>FindYourDreamJob.com</h1>
              </Link>
            </Col>
          </Row>
          <Row>
            <Searchbar setQuery={setQuery} />
          </Row>
          <Row>
            <Route path="/" exact render={() => <JobList query={query} />} />
            <Route path="/company-detail" exact component={CompanyDetail} />
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
