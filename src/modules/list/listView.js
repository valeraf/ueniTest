import React from "react";
import PropTypes from 'prop-types';
import Grid from "material-ui/Grid";
import Item from "../../components/listItem";

export default class ListView extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Grid container spacing={24}>
        {data.map(item => <Item item={item} key={item.id} />)}
      </Grid>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.array,
};
