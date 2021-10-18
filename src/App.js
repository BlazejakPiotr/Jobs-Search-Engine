import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./Components/Searchbar";
import JobList from "./Components/JobList";
import CompanyDetail from "./Components/CompanyDetail";

function App() {
  const [data, setData] = useState({ data: [] });

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
          <Row className="justify-content-center">
            <Col xs={9}>
              <Searchbar setData={setData} />
            </Col>
          </Row>
          <Row>
            <Route path="/" exact render={() => <JobList data={data} />} />
            <Route
              path="/company-detail/:company"
              exact
              component={CompanyDetail}
            />
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
