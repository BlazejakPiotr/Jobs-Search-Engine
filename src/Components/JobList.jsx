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
  StarFill,
} from "react-bootstrap-icons";
import { parseISO, format } from "date-fns";
import { useState } from "react";
import { useDispatch } from "react-redux";

import parse from "html-react-parser";
import { useSelector } from "react-redux";

function JobList({ job }) {
  const [selectedOffer, setSelectedOffer] = useState(false);
  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.favorites.likes.find((offer) => offer._id === job._id)
  );

  const handleLikeButton = () => {
    if (isLiked) {
      dispatch({ type: "REMOVE_JOB_FROM_FAVORITE", payload: job });
    } else {
      dispatch({ type: "ADD_JOB_TO_FAVORITE", payload: job });
    }
  };

  return (
    <li className="my-3">
      <Row className="d-flex justify-content-between">
        <Col>
          <h4>{job.title}</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          {isLiked ? (
            <Button
              variant="dark"
              onClick={() => handleLikeButton()}
              className="d-flex align-items-center"
            >
              Remove from favorite <StarFill style={{ marginLeft: "5px" }} />
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              onClick={() => handleLikeButton()}
              className="d-flex align-items-center"
            >
              Add to favorite <Star style={{ marginLeft: "5px" }} />
            </Button>
          )}
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
