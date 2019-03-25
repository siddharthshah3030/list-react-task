import React from "react";

class Box extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    fetchList().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div> I am the loader</div>;
    }

    return <div>I'm the app</div>;
  }
}

function fetchList() {
  return new Promise(resolve => setTimeout(() => resolve(), 3000));
}
export default Box;
