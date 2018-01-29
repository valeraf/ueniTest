import React from "react";
import PropTypes from 'prop-types';
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

const ItemDetails = ({name, country, classes, description, descrStyles}) => {
    const customStyles = descrStyles || classes.mb;
    return (
        <div>
            <Typography type="headline" component="h3">
                {name}
            </Typography>
            <Typography className={classes.country}>
                <i className={`material-icons ${classes.icon}`}>place</i>
                {country}
            </Typography>
            <Typography className={customStyles} component="p">
                {description}
            </Typography>
        </div>
    )
}

// {name, country, classes, description, descrStyles}

ItemDetails.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    descrStyles: PropTypes.object,
    classes: PropTypes.object,
};

const styles = theme => ({
    country: {
      marginBottom: 12,
      color: theme.palette.text.secondary
    },
    icon: {
      fontSize: 16,
      verticalAlign: -2
    },
    mb : {
        marginBottom: 16,
    }
  });
  
  export default withStyles(styles)(ItemDetails);