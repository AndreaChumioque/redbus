import React from 'react'

const Footer = () => (
  <footer className='container-fluid'>
    <ul className='nav row'>
      <li className=" print nav-item col-md-3 offset-md-1">Instrucciones vía
        <a className='containerPrint ' href=""><img src="../assets/icon-print.svg" alt="Print"   width="25px"/></a>
      </li>
      <li className=" mail nav-item col-md-4">Ayuda:  <a className=''href="mailto:contacto@redbus.pe">contacto@redbus.pe</a>   </li>
      <li className=" logoFooter nav-item col-md-3 offset-md-1">Pago via
        <img className="m-3" src="assets/logo-pagoefectivo.svg" alt="Redbus - PagoEfectivo" width="86px" />
      </li>
    </ul>


  </footer>
)

export default Footer