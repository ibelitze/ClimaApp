import React, {Component} from 'react';

class textos extends Component {

  render(){

    let contenido = null;

    this.props.jumbotron ?
    contenido = <div><p className="lead">{this.props.children}</p>
                <p className="lead">Una prueba solamente...</p>
                  <hr className="my-4"/></div>
    : contenido = <p>{this.props.children}</p>;

    return (
      <div>
        {contenido}
      </div>
    );
  }
}


export default textos;
