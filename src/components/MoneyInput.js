import React from 'react'

const MoneyInput = () => (
  <div className="subcontainer_input_MoneyInput col-3 py-2">
    <p className="text-uppercase font-weight-bold mb-0">Total</p>
    <form className="form-inline">
      <span>S/.</span>
      <input
        className="d-inline-block form-control p-0"
        type="text"
        placeholder="0.00"
      />
    </form>
  </div>
)

export default MoneyInput