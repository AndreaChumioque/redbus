import React from 'react'
import PrintThisComponent from './PrintThisComponent'

const Footer = () => (
  <footer className='container'>
    <ul className='nav row d-flex align-item-center'>
    <PrintThisComponent/>
      <li className=" mail nav-item col-md-5 col-7">Ayuda:  <a className=''href="mailto:contacto@redbus.pe">contacto@redbus.pe</a>   </li>
      <li className=" logoFooter nav-item col-md-4  col-5">Pago via
        <img className="m-3" src="assets/logo-pagoefectivo.svg" alt="Redbus - PagoEfectivo" width="86px" />
      </li>
    </ul>
  </footer>
)

export default Footer