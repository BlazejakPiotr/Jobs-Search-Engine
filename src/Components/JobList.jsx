import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import {
  GeoFill,
  FileTextFill,
  CaretDownFill,
  CaretUpFill,
  FolderFill,
  CurrencyExchange,
} from "react-bootstrap-icons";
import { parseISO, format } from "date-fns";
import { useState } from "react";

import parse from "html-react-parser";

export default function JobList({ job }) {
  const [selectedOffer, setSelectedOffer] = useState(false);

  return (
    <li className="my-3">
      <Row>
        <Col>
          <h4>{job.title}</h4>
          <p>
            <Link to={`/company-detail/${job.company_name}`}>
              {job.company_name}
            </Link>
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <small className="justify-content-end">
            Published:
            {format(parseISO(job.publication_date), " dd MMMM yyyy")}
          </small>
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
                <small> Location:</small>{" "}
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
