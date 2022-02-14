import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col,  } from 'react-bootstrap';


import './table_component.css';

class telefonos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    this.state.selectedItem !== null
      ? console.log(`Objeto seleccionado: ${this.state.selectedItem.name}`)
      : console.log(`No hay objeto seleccionado`);
    return (
      <div className="main-site">
        <h1>Bibliografia</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th> id</th>
                    <th>cover</th>
                    <th>title</th>
                    <th>autor</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.ID}</td>
                        <td>{item.author}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<Especies cardData={this.state.selectedItem} />*/}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.cover} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.id}</Card.Title>
                  <Card.Text>
                    author: {this.state.selectedItem.author}
                    <p />
                   title: {this.state.selectedItem.title}
                   <p />
                   imagen: {this.state.selectedItem.time}
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default telefonos;