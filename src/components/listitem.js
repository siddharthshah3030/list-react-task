import React from "react";
import "../styles/listitem.scss";

class ListItem extends React.Component {
  state = {
    loading: true,
    list: []
  };

  handleMouseIn() {
    this.setState({ hover: true });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const tooltipStyle = {
      display: this.state.hover ? "block" : "none"
    };

    return (
      <tr>
        <td
          className="tooltip"
          onMouseOver={this.handleMouseIn.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
          {this.props.item.name}
          <div className="tooltiptext" style={tooltipStyle}>
            <strong>Street</strong> {this.props.item.address.street}
            <br />
            <strong>Suit</strong> {this.props.item.address.suite}
            <br />
            <strong>City</strong> {this.props.item.address.city}
            <br />
            <strong>Zip</strong> {this.props.item.address.zipcode}
          </div>
        </td>

        <td className="username" align="right">
          ({this.props.item.username})
        </td>
      </tr>
    );
  }
}

export default ListItem;
