

import React, { Component } from 'react'


class PrintThisComponent extends Component {

  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }

  render() {

    return (
      
        <li className="text-center print nav-item col-md-4 col-12 d-flex flex-row justify-content-center">
          <span className='intructionPrint'>Instrucciones vía</span> 
          <a onClick={() => window.print()} className='d-flex align-items-center justify-content-center containerPrint  rounded content-center' href="">
            <img src="assets/icon-print.svg" alt="Print" width
            ="25px" />
          </a>
        </li>
     

    )
  }
}

export default PrintThisComponent

