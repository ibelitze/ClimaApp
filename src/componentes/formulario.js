import React from 'react';
import Container from '../hoc/container';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const formulario = (props) => (
  <Container columna="col-md-6">
    <Form onSubmit={props.getWheater}>
        <FormGroup>
          <Label for="exampleCity">Ciudad:</Label>
          <Input type="text" name="ciudad" id="ciudad" placeholder="Ciudad" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCountry">País:</Label>
          <Input type="text" name="pais" id="pais" placeholder="País" />
        </FormGroup>

        <Button type="submit">Buscar</Button>
      </Form>
  </Container>
);

export default formulario;
