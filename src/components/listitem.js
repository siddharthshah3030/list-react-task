import React from "react";
import "../styles/listitem.scss";

class ListItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td align="right">{this.props.item.username}</td>
      </tr>
    );
  }
}

export default ListItem;
