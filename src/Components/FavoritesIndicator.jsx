import { withRouter } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const FavoritesIndicator = ({ history, favorites }) => (
  <div>
    <button
      className="d-flex align-items-center"
      onClick={() => history.push("/favorites")}
    >
      Favorite offers:
      {favorites.likes.length}
      <StarFill />
    </button>
  </div>
);

export default connect(mapStateToProps)(withRouter(FavoritesIndicator));
