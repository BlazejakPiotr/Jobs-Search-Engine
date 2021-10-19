import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar({
  setData,
  handleInput,
  query,
  loadingData,
}) {
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
    setData({ data: [] });

    try {
      loadingData();
      let res = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=25&search=${
          query.query
        }${query.category ? "&category=" + query.category : ""}`
      );
      if (res.ok) {
        let jobs = await res.json();
        setData(jobs);
        loadingData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={searchJobs} className="d-flex justify-content-between">
      <Form.Control
        type="text"
        placeholder="keyword, title, company"
        onChange={(e) => handleInput(e, "query")}
        className="w-100"
      />

      <Form.Select
        onChange={(e) => handleInput(e, "category")}
        className="w-50 mx-3"
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Button type="submit">Search</Button>
    </Form>
  );
}
