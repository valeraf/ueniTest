
// actions
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS';
export const LOAD_START = 'LOAD_START';
export const FILTER_DATA = 'FILTER_DATA';
export const SORT_DATA = 'SORT_DATA';
export const DETAILS_PAGE = 'DETAILS_PAGE';
export const DETAILS_PAGE_LEFT = 'DETAILS_PAGE_LEFT';

const fetchBusiness = fetch('/businesses-data.json').then((res) => res.json());
const fetchReviews = fetch('/reviews-data.json').then((res) => res.json());

export const getData = () => {
    return (dispatch) => {
        dispatch(getDataStart());
        Promise.all([fetchBusiness, fetchReviews])
            .then(result => {
                const categories = getCategs(result[0]);
                dispatch( getDataSuccess({payload: result[0], categories: categories}) );
                dispatch( getRatingsSuccess({payload: result[1]}) );
            })
            .catch(e => {
                throw new Error('failed to fetch data, try again');
            });
    }
};

const getCategs = (data) => {
    return data.reduce((a, b) => {
        return a = a.indexOf(b.category) === -1 ? a.concat(b.category) : a;
    }, [])
}

export const getDataStart = () => ({ type: LOAD_START });
export const getDataSuccess = (data) => ({ type: LOAD_SUCCESS, data: data});
export const updateFilter = (data) => ({ type: FILTER_DATA, data: data});

export const getRatingsSuccess = (data) => ({ type: LOAD_REVIEWS_SUCCESS, payload: data.payload});