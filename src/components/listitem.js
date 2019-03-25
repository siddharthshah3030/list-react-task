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
            item details come here
          </div>
        </td>

        <td align="right">{this.props.item.username}</td>
      </tr>
    );
  }
}

export default ListItem;
