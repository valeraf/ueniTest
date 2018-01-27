import { combineReducers } from 'redux';
import data from '../modules/list/listState';
import detailsPageState from '../modules/detailsPage/detailsPageState';
import filterState from '../modules/filter/filterState';

export default combineReducers({
    data,
    detailsPageState,
    filterState,
});