import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'
import Clock from './Clock'
import MultipleItems from './MultipleItems'



const TabContent = ({ defaultTab, id }) => (
  <div className={defaultTab === id ? 'tab-pane fade show active' : 'tab-pane fade' } id={id} role="tabpanel">
    <div id="payment-info" className="row rounded d-flex align-items-center">
      <PaymentCode />
      <MoneyInput />
      <Clock/>
    </div>
    <div className="instructions mt-3">
      <p>Selecciona dónde quieres pagar:</p>
      <div>
      <MultipleItems/>
      </div>
      <p>Puedes pagar desde la Web o App móvil del Banco</p>
      <h6 className="subtitle">Instrucciones de pago</h6>
      <p>Indica que vas a realizar un pago a la empresa PAGOEFECTIVO.</p>
      <p>Indica el Código CIP: 9125682 y el importe a pagar en soles.</p>
    </div>
    <a
      id="btn-payment"
      className="btn w-100 text-white"
      href={id === 'cash' ?  "https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true" : "#internet"}
    >
      <img src="assets/icon-arrow.svg" width="24" alt="Go to"/> &nbsp;
      {id === 'internet' ? 'Ir a banca por internet' : 'Encuentra tu punto de pago'}
    </a>
  </div>
)
export default TabContent