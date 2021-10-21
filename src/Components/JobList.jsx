import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import {
  GeoFill,
  FileTextFill,
  CaretDownFill,
  CaretUpFill,
  FolderFill,
  CurrencyExchange,
  Star,
} from "react-bootstrap-icons";
import { parseISO, format } from "date-fns";
import { useState } from "react";
import { useDispatch } from "react-redux";

import parse from "html-react-parser";

function JobList({ job }) {
  const [selectedOffer, setSelectedOffer] = useState(false);
  const dispatch = useDispatch();

  return (
    <li className="my-3">
      <Row className="d-flex justify-content-between">
        <Col>
          <h4>{job.title}</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <button
            onClick={() =>
              dispatch({ type: "ADD_JOB_TO_FAVORITE", payload: job })
            }
          >
            <p className="d-flex align-items-center">
              Add offer to favorite <Star />
            </p>
          </button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between">
        <Col>
          <p>
            <Link to={`/company-detail/${job.company_name}`}>
              {job.company_name}
            </Link>
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          Published:
          {format(parseISO(job.publication_date), " dd MMMM yyyy")}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <div>
                <FolderFill />
                <small> Category:</small>
              </div>
              <p>{job.category}</p>
            </Col>
            <Col>
              <div>
                <GeoFill />
                <small> Location:</small>
                <p>{job.candidate_required_location}</p>
              </div>
            </Col>
            <Col>
              <div>
                <FileTextFill />
                <small> Type:</small>
                <p>{job.job_type}</p>
              </div>
            </Col>

            <Col>
              <div>
                <CurrencyExchange />
                <small> Salary:</small>
                <p>{job.salary}</p>
              </div>
            </Col>
            <hr />
          </Row>
        </Col>

        <Col sm={2} className="d-flex justify-content-end align-items-center">
          <Button
            variant="primary"
            onClick={() => {
              setSelectedOffer(!selectedOffer);
            }}
          >
            Details {selectedOffer ? <CaretUpFill /> : <CaretDownFill />}
          </Button>
        </Col>
      </Row>
      {selectedOffer ? (
        <div className="mt-4">{parse(job.description)}</div>
      ) : (
        ""
      )}
    </li>
  );
}

export default JobList;
