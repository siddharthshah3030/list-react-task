import React from "react";
import "../styles/loader.scss";
import ListItem from "./listitem";
class ListContainer extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    fetchList
      .then(list => {
        this.setState({ list });
      })
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div className="loader"> I am the loader</div>;
    }

    return (
      <div>
        <table>
          <tr>
            <th>name</th>
            <th>username</th>

          </tr>
          {this.state.list.map(e => {
            return <ListItem item={e} />
          })}
        </table>
      </div>
    );
  }
}

var fetchList = new Promise(function (resolve, reject) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      // Do something for an error here
    });
});

export default ListContainer;
