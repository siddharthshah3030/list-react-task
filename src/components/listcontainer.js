import React from "react";
import "../styles/loader.scss";

class listContainer extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    fetchList
      .then(list => {
        console.log(list[2].name);
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
        I'm the app <br />
        {this.state.list[3].name}
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

export default listContainer;
