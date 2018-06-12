import React, {Component} from 'react';

class container extends Component {

    render(){

      let clase= "";
      this.props.columna ? clase= this.props.columna : clase = "container";


      return (
        <div className={clase}>
          {this.props.children}
        </div>
      );
    }

}

export default container;
