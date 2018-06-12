import React, {Component} from 'react';

class titulos extends Component {

  render(){

    let contenido = null;

    this.props.jumbotron ?
    contenido = <h1 className="display-4">{this.props.children}</h1>
    : contenido = <h1>{this.props.children}</h1>;

    return (
      <div>
        {contenido}
      </div>
    );
  }
}


export default titulos;
