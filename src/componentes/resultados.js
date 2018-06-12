import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const Resultado = (props) => {
  return (
    <div className="col-sm-6">
    <br/>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.ciudad}</CardTitle>
          <CardSubtitle>{props.pais}</CardSubtitle>
          <CardText>temperatura mínima de: {props.temp_min} Grados</CardText>
          <CardText>temperatura máxima de: {props.temp_max} Grados</CardText>
          <CardText>Humedad de: {props.hum}%</CardText>
          <CardText>Velocidad del viento: {props.viento}</CardText>
          <CardText>Descripción: {props.desc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resultado;
