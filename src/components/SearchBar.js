import React from "react";
import {  Form } from "semantic-ui-react";
import searchForStock from './Stocks';
import {Button} from "@material-ui/core";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search"
              name="stock"
              value={this.props.searchStock}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;