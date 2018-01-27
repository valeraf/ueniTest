import React from "react";
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
