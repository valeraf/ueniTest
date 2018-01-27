import { connect } from "react-redux";
import Header from './headerView';

const mapStateToProps = state => ({
    isDetail: state.detailsPageState.isDetail
});
  
export default connect(mapStateToProps)(Header);