import React from 'react';
import Textos from './textos';
import Titulos from './titulos';
import Container from '../hoc/container';

const contenedorTextos = () => (
  <Container>
    <Titulos jumbotron>App con info del clima</Titulos>
    <Textos jumbotron>como una primera aplicación de práctica para ir probando</Textos>
  </Container>
);

export default contenedorTextos;
