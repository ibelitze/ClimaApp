import React, { Component } from 'react';
import Formulario from './formulario';
import Resultados from './resultados';
import Container from '../hoc/container';
import Row from '../hoc/row';
import Titulo from './titulos';

const API_KEY = "133e6ecce9911e02305df0515357615a";

class contenedorApp extends Component {

state = {
        ciudad: null,
        pais: null,
  			temperaturaMinima: null,
        temperaturaMaxima: null,
        humedad: null,
        velocidadViento: null,
        descripcion: null
  		}


  getWheater = async (e) => {
    e.preventDefault();
    const CIUDAD = e.target.elements.ciudad.value;
    const PAIS = e.target.elements.pais.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CIUDAD},${PAIS}&mode=json&appid=${API_KEY}&units=metric`);
    const data = await API_CALL.json();
    console.log(data);
    this.setState({
      ciudad: data.name,
      pais: data.sys.country,
      temperaturaMinima: data.main.temp_min,
      temperaturaMaxima: data.main.temp_max,
      humedad: data.main.humidity,
      velocidadViento: data.wind.speed,
      descripcion: data.weather[0].description
    });
    console.log(this.state);
  }



  render(){

    let resultados = null;
    this.state.ciudad ?
    resultados = <Resultados ciudad={this.state.ciudad}
                             pais={this.state.pais}
                             temp_min={this.state.temperaturaMinima}
                             temp_max={this.state.temperaturaMaxima}
                             hum={this.state.humedad}
                             viento={this.state.velocidadViento}
                             desc={this.state.descripcion}/>

    : resultados = "Elija una ciudad, un país y haga su búsqueda";

    return (

      <Container>
        <Titulo>Información del clima y las temperaturas</Titulo>
        <Formulario getWheater={this.getWheater} />

        <br/><br/>

        <Row>
          {resultados}
        </Row>
      </Container>
    );
  }
}


export default contenedorApp;
