import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { selectBank } from '../actions'
import TabContent from '../components/TabContent'

const mapStateToProps = (state) => ({
  paymentCode: state.info.paymentCode,
  content: state.tabs[state.info.activeTab],
  selectedBank: state.selectedBank
})


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSelectedBank: selectBank
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)