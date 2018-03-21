import React from 'react'

const PaymentCode = () => (
  <div className="subcontainer_input_PaymentCode col-3 py-2">
    <p>Código de pago</p>
    <form>
      <div className="row">
        <div className="col">
        <input className="form-control" type="text" maxLength="8" />
        </div>
      </div>
    </form>
  </div>
)

export default PaymentCode