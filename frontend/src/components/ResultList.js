import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Filter for activities"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

class ResultList extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const containsText = (item) => item.name.indexOf(filterText) > -1;

    const rows = [];

    this.props.results.forEach((park) => {
      if (!park.activities.some(containsText)) {
        return;
      }

      rows.push(
        <div key={park.id}>
          <Card sx={{ maxWidth: 700, margin: "0 auto" }}>
            <CardMedia
              component="img"
              height="250"
              image={park.images[0].url}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {park.fullName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.description}
              </Typography>
              <br />
              <Typography variant="body1" color="text.secondary">
                Directions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.directionsInfo}
              </Typography>
              <br />
              <Typography variant="body1" color="text.secondary">
                Weather
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.weatherInfo}
              </Typography>
              <br />
              <Typography variant="body1" color="text.secondary">
                Activities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.activities.map((item) => item.name).join(", ")}
              </Typography>
              <br />

              <Typography variant="body1" color="text.secondary">
                More Info
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a target="_blank" href={park.url}>
                  LINK
                </a>
              </Typography>
            </CardContent>
          </Card>
          <br />
        </div>
      );
    });

    return rows;
  }
}

class FilterableResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ResultList
          results={this.props.results}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableResultsList;
