import React from 'react'
import PrintThisComponent from './PrintThisComponent'

const Footer = () => (
  <footer className='container'>
    <ul className='nav row d-flex align-items-center justify-content-center'>
    <PrintThisComponent/>
      <li className="text-center mail nav-item col-md-4 col-6">Ayuda:  <a className=''href="mailto:contacto@redbus.pe">contacto@redbus.pe</a>   </li>
      <li className=" text-center logoFooter nav-item col-md-4  col-5">Pago via
        <img className="m-3" src="assets/logo-pagoefectivo.svg" alt="Redbus - PagoEfectivo" width="86px" />
      </li>
    </ul>
  </footer>
)

export default Footer