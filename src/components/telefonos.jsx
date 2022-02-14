import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';


import './table_component.css';

class telefonos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };
//NO FUNCIONA , TE DEJO AQUI LA API CON LA SELECCION DE LA FILA Y TE LO INTENTO HACER DE OTRA FORMA A VER SI ME solamente
  async componentDidMount() {
    const response = await fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans');
    
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    this.state.selectedItem !== null
      ? console.log(`Objeto seleccionado: ${this.state.selectedItem.name}`)
      : console.log(`No hay objeto seleccionado`);
    return (
      <div className="main-site">
        <h1>Telefonos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th> Marca</th>
                    <th>Modelo</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.brand_name}</td>
                        <td>{item.brand_slug}</td>
                       
                        
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
                  <Card.Title>{this.state.selectedItem.brand_name}</Card.Title>
                  Aqui iria  con la referencia de selectedItem.?????
                  <li>Imagen</li>
            <li>Marca - Modelo</li>
            <li>Sistema operativo</li>
            <li>Dimensión</li>
            <li>Almacenamiento</li>
            
                  <Card.Text>
                    author: {this.state.selectedItem.brand_slug}
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