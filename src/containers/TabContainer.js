import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { changeTab } from '../actions'
import Tab from '../components/Tab'

const mapStateToProps = (state) => ({
  activeTab: state.info.activeTab
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveTab: changeTab
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)