import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import ItemDetails from "../../components/itemDetails";
import { DETAILS_PAGE, DETAILS_PAGE_LEFT } from "../../redux/actions";

class DetailsPage extends React.Component {
  renderRating(reviews) {
    if (reviews) {
      return `Rating: ${reviews.score}/5`;
    }
    return "No reviews";
  }
  componentWillMount() {
    this.props.dispatch({ type: DETAILS_PAGE });
  }
  componentWillUnmount() {
    this.props.dispatch({ type: DETAILS_PAGE_LEFT });
  }
  render() {
    const { data, reviews, classes } = this.props;
    const img = data ? data.imageUrl || "" : "";
    return data ? (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper elevation={4} className={classes.right}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={4}>
                <img src={img} className={classes.img} alt="test" />
              </Grid>
              <Grid item xs={12} md={8}>
                <ItemDetails
                  name={data.name}
                  country={data.country}
                  description={data.description}
                />

                <Typography className={classes.mb} component="p">
                  {this.renderRating(reviews)}
                </Typography>
                <Typography className={classes.mb} component="p">
                  Category: {data.category}
                </Typography>
                <Button raised onClick={() => alert('Submited')} fullWidth={true} color="secondary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    ) : null;
  }
}

DetailsPage.propTypes = {
  classes: PropTypes.object,
  reviews: PropTypes.string,
  data: PropTypes.object,
};

const styles = theme => ({
  img: {
    width: "100%",
    verticalAlign: "top"
  },
  mb: {
    marginBottom: 16
  },
  right: {
    padding: 20
  }
});

export default withStyles(styles)(DetailsPage);
