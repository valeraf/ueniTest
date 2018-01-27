import React from "react";
import Grid from "material-ui/Grid";
import Select from "material-ui/Select";
import Typography from "material-ui/Typography";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Button from "material-ui/Button";
import { updateFilter, SORT_DATA } from "../../redux/actions";

export default class FilterView extends React.Component {
  onSort(sort) {
    const newSort = sort === "ASC" ? "DESC" : "ASC";
    this.props.dispatch({ type: SORT_DATA, data: newSort });
  }

  handleChange = event => {
    this.props.dispatch(updateFilter(event.target.value));
  };
  render() {
    const { categories, filter, sort, isDetail } = this.props;
    const arrow = sort === "ASC" ? "arrow_upward" : "arrow_downward";
    const raised = sort ? true : false;
    return (
      <Grid
        container
        justify="flex-end"
        spacing={24}
        style={{display: isDetail ? 'none' : 'flex', marginBottom: 8,}}
      >
        <Grid item>
          <Button
            raised={raised}
            onClick={() => this.onSort(sort)}
            style={{ textTransform: "none" }}
            mini={true}
          >
            Sort: <i className={`material-icons`}>{arrow}</i>
          </Button>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography>Category: </Typography>
          <FormControl style={{ width: 120, marginLeft: 10 }}>
            <Select
              value={filter}
              onChange={this.handleChange}
              inputProps={{
                name: "categ"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map((item, i) => {
                return (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}