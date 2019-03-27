import React from "react";
import "../styles/loader.scss";
import "../styles/listcontainer.scss";
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
    return (
      <div className="tableContainer">
        <h1 className="heading">
          Users
          {loading > 0 && " (loading)"}
        </h1>
        <div className="table">
          <table>
            {!loading > 0 && (
              <tbody>
                {this.state.list.map((e, i) => {
                  return <ListItem key={i} item={e} />;
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }
}

var fetchList = new Promise(function(resolve, reject) {
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
