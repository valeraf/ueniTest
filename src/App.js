import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import List from "./modules/list/listContainer";
import DetailsPage from "./modules/detailsPage/detailsPageContainer";
import { getData } from "./redux/actions";
import Loader from './modules/loader/loaderContainer';
import Header from './modules/header/headerContainer';
import Filters from "./modules/filter/filterContainer";

const routes = [
  {
    path: "/",
    component: List
  },
  {
    path: "/b/:businessId",
    component: DetailsPage
  }
];

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Loader />
        <Router>
          <div>
            <Header />
            <div className={classes.root}>
              <Filters />
              {routes.map((route, i) => (
                <Route
                  exact={true}
                  path={route.path}
                  key={i}
                  render={props => <route.component {...props} />}
                />
              ))}
            </div>
          </div>
        </Router>
      </div>
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
  },
});

const styledApp = withStyles(styles)(App);

export default connect(null, { getData })(styledApp);
