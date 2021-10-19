import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./Components/Searchbar";
import Home from "./Components/Home";
import CompanyDetail from "./Components/CompanyDetail";

function App() {
  const [query, setQuery] = useState({
    query: "",
  });
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  const loadingData = () => setIsLoading(!isLoading);

  const handleInput = (e, propName) => {
    setQuery({
      ...query,
      [propName]: e.target.value,
    });
  };

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
            <Col className="my-4 ">
              <Searchbar
                setData={setData}
                query={query}
                handleInput={handleInput}
                loadingData={() => loadingData}
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col>
              <Route
                path="/"
                exact
                render={() => (
                  <Home
                    data={data}
                    setData={setData}
                    query={query}
                    loadingData={loadingData}
                    isLoading={isLoading}
                  />
                )}
              />
              <Route
                path="/company-detail/:company"
                exact
                component={CompanyDetail}
                loadingData={loadingData}
                isLoading={isLoading}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
