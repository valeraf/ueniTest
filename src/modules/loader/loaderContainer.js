import { connect } from "react-redux";
import React from "react";
import PropTypes from 'prop-types';
import { CircularProgress } from "material-ui/Progress";
import { withStyles } from "material-ui/styles";

const mapStateToProps = state => ({
    loading: state.data.loading,
});

const Loader = ({loading, classes}) => {
    const loaderClass = loading ? classes.loader : classes.loader + ' ' + classes.hide;
    return (
        <div className={loaderClass}>
            <CircularProgress className={classes.progress} size={150} />
        </div>
    )
}

Loader.propTypes = {
    loading: PropTypes.bool,
    classes: PropTypes.object,
};

const styles = theme => ({
    loader: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    hide: {
        display: 'none !important',
    },
    progress: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10
    }
  });
  
const styledLoader = withStyles(styles)(Loader);

export default connect(mapStateToProps)(styledLoader);
