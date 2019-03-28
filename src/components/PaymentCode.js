import React from 'react'

const PaymentCode = ({ code }) => (
  <div className="subcontainer_input_PaymentCode col-4 col-md-3 p-2 d-flex flex-column align-items-center justify-content-center rounded-left">
    <p className="mb-0">Código de pago</p>
    <p id="code" className="mb-0 text-center">{code}</p>
  </div>
)

export default PaymentCode