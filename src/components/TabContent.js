import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'

const TabContent = ({ defaultTab, id }) => (
  <div className={defaultTab === id ? 'tab-pane fade show active' : 'tab-pane fade' } id={id} role="tabpanel">
    <div id="payment-info" className="">
      <PaymentCode />
      <MoneyInput />
    </div>
    <p>Selecciona dónde quieres pagar:</p>
    <div>
      {/* Carrusel */}
    </div>
    <p>Instrucciones de pago</p>
    <p>Indica que vas a realizar un pago a la empresa PAGOEFECTIVO.</p>
    <p>Indica el Código CIP: 9125682 y el importe a pagar en soles.</p>
    <a className="btn btn-danger w-100 text-white">
      {id === 'internet' ? 'Ir a banca por internet' : 'Encuentra tu punto de pago'}
    </a>
  </div>
)

export default TabContent