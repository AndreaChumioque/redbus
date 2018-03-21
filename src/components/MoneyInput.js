import React from 'react'

const MoneyInput = () => (
  <div className="subcontainer_input_MoneyInput col-5 py-2">
    <h6 className="text-uppercase font-weight-bold">Total</h6>
    <form>
      <div className="row">
        <div className="col">
          <input className="form-control" type="text" placeholder="S/. 0.00"/>
        </div>
      </div>
    </form>
  </div>
)

export default MoneyInput