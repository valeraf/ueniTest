import {FILTER_DATA, SORT_DATA} from '../../redux/actions';

const initialState = {
    filter: '',
    sort: null,
}


const filterState = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return {...state, filter: action.data};
        case SORT_DATA:
            return {...state, sort: action.data}
        default:
            return state;
    }
}

export default filterState