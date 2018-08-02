import React from "react";
import { Input } from "semantic-ui-react";

class SearchItems extends React.Component {
  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange(event, { value, name }) {
    if(this.props.searchFunction){
      this.props.searchFunction(value)
    } 
  }

  render() {
    return (
      <Input
        transparent
        icon={{ name: "search", link: true }}
        placeholder={this.props.placeholder}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default SearchItems
