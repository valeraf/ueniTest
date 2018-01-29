import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";

class Header extends React.Component {
  render() {
    const { isDetail, classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <div className={classes.root}>
            {isDetail && (
              <Button
                fab
                mini
                style={{ marginRight: 20 }}
                color="primary"
                aria-label="back"
                to={`/`}
                component={props => <Link {...props} />}
              >
                <i className={`material-icons`}>arrow_back</i>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

Header.propTypes = {
  classes: PropTypes.object,
  isDetail: PropTypes.bool,
};

export default withStyles(styles)(Header);
