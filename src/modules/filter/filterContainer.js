import { connect } from "react-redux";
import FilterView from "./filterView";

const mapStateToProps = state => ({
  categories: state.data.categories,
  filter: state.filterState.filter,
  sort: state.filterState.sort, 
  isDetail: state.detailsPageState.isDetail,
});

export default connect(mapStateToProps)(FilterView);
