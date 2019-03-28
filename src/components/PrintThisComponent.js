

import React from 'react'

const PrintThisComponent = () => (
  <li className="text-center print nav-item col-md-4 col-12 d-flex flex-row justify-content-center">
    <span className='instruction-print'>Instrucciones vía</span> 
    <button 
      onClick={() => window.print()}
      className='print-button d-flex align-items-center justify-content-center rounded content-center' href="">
      <img src="assets/icon-print.svg" alt="Print" width
      ="25px" />
    </button>
  </li>
);

export default PrintThisComponent
