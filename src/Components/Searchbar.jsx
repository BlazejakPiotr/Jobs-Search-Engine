import { Row, Col, Form, Button } from "react-bootstrap";
export default function SearchBar() {
  return (
    <Form>
      <Row className="mt-3">
        <Col xs={10} className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="keyword, title, company"
            className="w-75"
          />
        </Col>
        <Col xs={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}
