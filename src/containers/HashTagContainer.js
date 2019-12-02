import HashTagList from '../components/HashTagList'
import { deleteHash, editHash, saveHash, editCancel } from '../ac'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ hashReducer: state.hashReducer })

const mapDispatch = dispatch => ({
  deleteHash: data => dispatch(deleteHash(data)),
  editHash: data => dispatch(editHash(data)),
  saveHash: data => dispatch(saveHash(data)),
  editCancel: () => dispatch(editCancel()),
})

export default connect(
  mapStateToProps,
  mapDispatch
)(HashTagList)
