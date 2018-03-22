

import React, { Component } from 'react'


class PrintThisComponent extends Component {

  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }

  render() {

    return (
      
        <li className="text-center print nav-item col-md-4 col-12 aling-center">Instrucciones vía
        <a onClick={() => window.print()} className='containerPrint ' href=""><img src="../assets/icon-print.svg" alt="Print" width="25px" /></a>
        </li>
     

    )
  }
}

export default PrintThisComponent

