import React from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownExampleAllowAdditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddition = this.handleAddition.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
      //foreach category create options 
      //key, value, text  

  }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options]
    });
  };

  handleChange = (e, { value }) => this.setState({ currentValues: value });

  render() {
    const { currentValues } = this.state;

    return (
      <Dropdown
        options={this.state.options}
        placeholder="Choose Languages"
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default DropdownExampleAllowAdditions;
