import React from 'react';
import { Container } from 'react-bootstrap';
import Libro from './Libro';
//Ejercicio2
class FormularioEj2 extends React.Component {
  constructor(props) {
    super(props);
    const elementos = []
    this.state = {
      listaComponentes: elementos,
    };
    this.valorTextTitulo = React.createRef();
    this.valorTextAutor = React.createRef();
    this.valorDatePublicacion = React.createRef();
    this.valorNPaginas = React.createRef();
    this.valorURLImagen = React.createRef();
    this.valorTextIdioma = React.createRef();
  }

  onClickAñadir() {
    const newLista = this.state.listaComponentes.concat(
      <Libro
        titulo={this.valorTextTitulo.current.value}
        autor={this.valorTextAutor.current.value}
        fecha={this.valorDatePublicacion.current.value}
        paginas={this.valorNPaginas.current.value}
        urlimagen={this.valorURLImagen.current.value}
        idioma={this.valorTextIdioma.current.value}
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
            placeholder="Introduce el título"
          />
          <br />
          <input
            ref={this.valorTextAutor}
            type="text"
            placeholder="Introduce el autor"
          />
          <br />
          <input ref={this.valorDatePublicacion} type="date" />
          <br />
          <input
            ref={this.valorNPaginas}
            type="number"
            placeholder="Número de páginas"
          />
          <br />
          <input
            ref={this.valorURLImagen}
            type="url"
            placeholder="URL imagen portada"
          />
          <br />
          <input ref={this.valorTextIdioma} type="text" placeholder="Idioma" />
          <br />
          <button onClick={this.onClickAñadir.bind(this)}>Añadir</button>
          <br />
          {this.state.listaComponentes.map}
        </Container>
      </div>
    );
  }
}

export default FormularioEj2;