import ComboList from "../components/ComboList";
import { editComboHash, saveCombo, cancelCombo } from "../AC";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  comboHash: state.comboHash
});

const mapDispatch = dispatch => ({
  editComboHash: data => dispatch(editComboHash(data)),
  saveCombo: data => dispatch(saveCombo(data)),
  cancelCombo: data => dispatch(cancelCombo(data))
});

export default connect(
  mapStateToProps,
  mapDispatch
)(ComboList);
