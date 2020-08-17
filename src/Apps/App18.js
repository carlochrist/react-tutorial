import React from "react";

class App18 extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchedData: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          fetchedData: data.results[0],
          loading: false,
        })
      );
  }

  render() {
    console.log(this.state.fetchedData);

    const text = this.state.loading
      ? "Loading..."
      : this.state.fetchedData.email;

    return <div>{text}</div>;
  }
}

export default App18;

// {this.state.dataLoaded ? this.state.fetchedData?.name : null}
// {this.state.dataLoaded ? this.state.fetchedData?.gender : null}
// {this.state.dataLoaded ? this.state.fetchedData?.email : null}

// {this.state.fetchedData.name.title}
// {this.state.fetchedData.name.first}
// {this.state.fetchedData.name.last}
