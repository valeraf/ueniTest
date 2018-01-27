import {LOAD_REVIEWS_SUCCESS, DETAILS_PAGE, DETAILS_PAGE_LEFT} from '../../redux/actions';

const initialState = {
    reviews: {},
    isDetail: false,
}


const detailsPageState = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS_SUCCESS:
            return {...state, reviews: action.payload};
        case DETAILS_PAGE:
            return {...state, isDetail: true};
        case DETAILS_PAGE_LEFT:
            return {...state, isDetail: false};
        default:
            return state;
    }
}

export default detailsPageState