import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telList: [],
      loading: false
    };
    this.getTelefonosList = this.getTelefonosList.bind(this);
  }

  getTelefonosList() {
    this.setState({ loading: true });
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          this.setState({ loading: false, telList: res.data });
        }, 2000);
      });
  }

  render() {
    const { telList, loading } = this.state;

    return (
      <div className="container App">
        <h4 className="d-inline-block">Clue Mediator</h4>
        <button
          className="btn btn-info float-right"
          onClick={this.gettelList}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get User List"}
        </button>
        <div className="clearfix" />

        <table className="table mt-3">
          <thead className="thead-dark">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {telList.map(x => (
              <tr>
                <td>{x.brand_name}</td>
                <td>{x.last_name}</td>
                <td>{x.email}</td>
                <td>
                  <img src={x.avatar} width="50" height="50" />
                </td>
              </tr>
            ))}
            {telList.length == 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <h4 style={{ textAlign: "center" }}>
          <a href="http://www.cluemediator.com" target="_blank">
            Checkout more article on ReactJS
          </a>
        </h4>
      </div>
    );
  }
}

export default App;