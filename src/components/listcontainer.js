import React from "react";
import "../styles/listcontainer.css";
import ListItem from "./listitem";
import loader from "./assets/loader.gif";

class ListContainer extends React.Component {
  state = {
    loading: true,
    list: [],
    error: {
      hasError: false,
      errorInfo: {}
    }
  };

  componentDidMount() {
    fetchList
      .then(list => {
        this.setState({ list });
      })
      .then(() => this.setState({ loading: false }))
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            errorInfo: err,
            hasError: true
          }
        }));
      });
  }

  render() {
    const { loading } = this.state;
    if (this.state.error.hasError)
      return (
        <div>
          <h1>error in fetching json</h1>
          <strong>Error message:</strong>
          <p>{String(this.state.error.errorInfo)}</p>
        </div>
      );
    return (
      <div className="tableContainer">
        <h1 className="heading">
          Users
          {loading > 0 && " (loading)"}
          {loading > 0 && (
            <img className="loaderGif" src={loader} alt="loading..." />
          )}
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
      reject(err);
    });
});

export default ListContainer;
