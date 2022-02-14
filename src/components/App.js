import React from "react";
import "./App.css";
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false
    };
    this.getUserList = this.getUserList.bind(this);
  }
  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };
  getUserList() {
    this.setState({ loading: true });
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
    //https://api-mobilespecs.azharimm.site/v2/top-by-fans no funciona
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          this.setState({ loading: false, userList: res.data });
        }, 2000);
      });
  }

  render() {
    const { userList, loading } = this.state;

    return (
      <div className="container App">
        <h4 className="d-inline-block">API Telefonos______</h4>
        
        <button
          className="btn btn-info float-right"
          onClick={this.getUserList}
          disabled={loading}
        >
          {loading ? "Loading..." : "Búsqueda"}
        </button>
        <div className="clearfix" />

        <table className="table mt-3">
          <thead className="thead-dark">
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Enlace Detalles</th>
          </thead>
          <tbody>
          {this.state.userList.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.brand_name}</td>
                        <td>{item.brand_slug}</td>
                        <td>{item.device_count}</td>
                        <td>{item.author}</td>
                        
                      </tr>
                    );
                  })}
                  </tbody>
                  <tbody>
           
            {userList.length == 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <h4 style={{ textAlign: "center" }}>
          <a href="https://github.com/azharimm/phone-specs-api" target="_blank">
          https://github.com/azharimm/phone-specs-api
          </a>
        </h4>
      </div>
    );
  }
}

export default App;