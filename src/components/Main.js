import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'

const Main = () => {
  return (
    <section>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" id="internet-tab" data-toggle="tab" href="#internet" role="tab" aria-selected="true">Banca por Internet</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="cash-tab" data-toggle="tab" href="#cash" role="tab" aria-controls="profile" aria-selected="false">Pagar en efectivo</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="internet" role="tabpanel" aria-labelledby="internet-tab">Hola</div>
          <div className="tab-pane fade" id="cash" role="tabpanel" aria-labelledby="cash-tab">Hola 2</div>
        </div>
      <div>
        <PaymentCode />
        <MoneyInput />
      </div>
    </section>
  )

}

export default Main;