import { connect } from 'react-redux';
import DetailsPage from './detailsPage';

const mapStateToProps = (state, props) => ({
    data: getDataById(props.match.params.businessId, state.data.payload),
    reviews: getItemRating(props.match.params.businessId, state.detailsPageState.reviews),
});

export const getDataById = (businessId, data) => {
    return data.find((item) => item.id.toString() === businessId);
}

const getItemRating = (businessId, reviews) => {
    const res = reviews[businessId] ? reviews[businessId].find(item => {
        return item['business_id'].toString() === businessId;
    }) : null;
    return res;
}

export default connect(mapStateToProps)(DetailsPage);
