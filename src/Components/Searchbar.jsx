import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function SearchBar({ setQuery }) {
  const searchJobs = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + keyword
      );
      if (res.ok) {
        let jobs = await res.json();
        setQuery(jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [keyword, setKeyword] = useState("");

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Form onSubmit={searchJobs}>
      <Row className="mt-3">
        <Col xs={10} className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="keyword, title, company"
            className="w-75"
            onChange={(e) => handleInput(e)}
          />
        </Col>
        <Col xs={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}
