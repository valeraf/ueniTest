import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import ItemDetails from './itemDetails';

class Item extends React.Component {
  render() {
    const { classes, item } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <Link to={`/b/${item.id}`}>
            <CardMedia
              className={classes.media}
              image={item.imageUrl}
              title={item.name}
            />
          </Link>
          <CardContent>
            <ItemDetails 
                name={item.name}
                country={item.country}
                description={item.description}
                descrStyles={classes.descr}
            />
          </CardContent>
          <CardActions>
            <Button
              raised
              to={`/b/${item.id}`}
              component={props => <Link {...props} />}
              fullWidth={true}
              color="secondary"
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object,
};

const styles = theme => ({
  media: {
    height: 200
  },
  descr: {
    height: 60,
    overflow: "hidden"
  },
});

export default withStyles(styles)(Item);
