import { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function SearchBar({ setData }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      let res = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs/categories"
      );
      if (res.ok) {
        let categories = await res.json();
        setCategories(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const searchJobs = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + query
      );
      if (res.ok) {
        let jobs = await res.json();
        setData(jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={searchJobs}>
      <Row className="mt-3">
        <Col xs={7} className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="keyword, title, company"
            onChange={(e) => handleInput(e)}
          />
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            {categories.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}
