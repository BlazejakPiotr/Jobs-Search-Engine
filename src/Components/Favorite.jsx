import JobList from "./JobList";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favorites: state.favorites.likes,
});

const Favorite = ({ favorites }) => (
  <Row>
    <h6 className="my-3">Favorite offers: {favorites.length}</h6>
    <ul>
      {favorites.map((job) => {
        return <JobList job={job} key={job._id} />;
      })}
    </ul>
  </Row>
);

export default connect(mapStateToProps)(Favorite);
