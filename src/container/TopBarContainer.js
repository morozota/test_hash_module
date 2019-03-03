import { connect } from "react-redux";
import TopBar from "../components/TopBar";
import { addHash, addComboHash, checkHashCancel } from "../AC";

const mapStateToProps = state => ({
  hashReducer: state.hashReducer
});

const mapDispatch = dispatch => ({
  addHash: data => dispatch(addHash(data)),
  addComboHash: data => dispatch(addComboHash(data)),
  checkHashCancel: () => dispatch(checkHashCancel())
});

export default connect(
  mapStateToProps,
  mapDispatch
)(TopBar);
