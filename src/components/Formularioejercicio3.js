import React from 'react';
import { Container } from 'react-bootstrap';
import Libro from './telefono';
//Ejercicio2
class FormularioEj2 extends React.Component {
  constructor(props) {
    super(props);
    const elementos = []
    this.state = {
      listaComponentes: elementos,
    };
   
    this.valorTextAutor = React.createRef();
    this.valorDatePublicacion = React.createRef();
    this.valorNPaginas = React.createRef();
    this.valorURLImagen = React.createRef();
   
  }

  onClickAñadir() {
    const newLista = this.state.listaComponentes.concat(
      <Libro
       
        autor={this.valorTextAutor.current.value}
        
        paginas={this.valorNPaginas.current.value}
        urlimagen={this.valorURLImagen.current.value}
        
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Título</h1>
          {this.state.listaComponentes}
          <input
            ref={this.valorTextTitulo}
            type="text"
            placeholder="Introduce la marca"
          />
          <br />
          <input
            ref={this.valorTextAutor}
            type="text"
            placeholder="Introduce el modelo"
          />
          
          <input
            ref={this.valorNPaginas}
            type="number"
            placeholder="Cantidad"
          />
          <br />
          <input
            ref={this.valorURLImagen}
            type="url"
            placeholder="URL imagen "
          />
          
          <button onClick={this.onClickAñadir.bind(this)}>Añadir</button>
          <br />
          {this.state.listaComponentes.map}
        </Container>
      </div>
    );
  }
}

export default FormularioEj2;