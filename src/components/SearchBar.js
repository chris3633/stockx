import React from "react";
import { Button, Form } from "semantic-ui-react";
import searchForStock from './Stocks';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchStock: "" };
  }

  handleChange = event => {
    this.setState({ searchStock: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    searchForStock(this.state.searchStock);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search a stock"
              name="stock"
              value={this.state.searchStock}
              onChange={this.handleChange}
            />
            <Button type="submit" color="green">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;