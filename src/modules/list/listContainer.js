import { connect } from "react-redux";
import ListView from "./listView";

const mapStateToProps = state => ({
  data: filterData(state.filterState.sort)(state.data.payload, state.filterState.filter),
  categories: state.data.categories,
  filter: state.filterState.filter,
  sort: state.filterState.sort, 
});

const filterData = (sortBy) => (data, filter) => {
    const res = data.slice();
    if(sortBy) {
        res.sort((a,b) => {
            if(a.name < b.name) return sortBy === 'ASC' ? -1 : 1;
            if(a.name > b.name) return sortBy === 'ASC' ? 1 : -1;
            return 0;
        })
    }
    if (filter.length > 0) {
        return res.filter(item => item.category === filter);
    }
    
    return res;
}

export default connect(mapStateToProps)(ListView);
