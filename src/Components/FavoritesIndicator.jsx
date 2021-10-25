import { withRouter } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => state;

const FavoritesIndicator = ({ history, favorites }) => (
  <div>
    <Button
      variant="dark"
      className="d-flex align-items-center favorite-btn"
      onClick={() => history.push("/favorites")}
    >
      Favorite offers: {favorites.likes.length}{" "}
      <StarFill style={{ marginLeft: "5px" }} />
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(FavoritesIndicator));
