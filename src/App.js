import React, { Component } from 'react';
import ContenedorTextos from './componentes/contenedorTextos';
import ContenedorApp from './componentes/contenedorApp';
import Container from './hoc/container';



class App extends Component {
  render() {

    return (
      <Container>

        <div className="jumbotron">
          <ContenedorTextos />
        </div>

        <ContenedorApp />
      </Container>
    );
  }
}

export default App;
