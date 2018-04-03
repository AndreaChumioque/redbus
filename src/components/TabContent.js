import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'
import Clock from './Clock'
import MultipleItems from './MultipleItems'

const TabContent = ({ paymentCode, content, selectedBank, setSelectedBank, activeTab }) => (
  <div className="tab-pane show active">
  {console.log(activeTab)}
    <div id="payment-info" className="d-flex flex-row">
      <PaymentCode code={paymentCode} />
      <MoneyInput/>
      <Clock/>
    </div>
    <p className="mt-3">Selecciona dónde quieres pagar:</p>
    <MultipleItems banks={content.banks} setSelectedBank={setSelectedBank} selectedBank={selectedBank}/>
    <div className="instructions mt-3">
      <p>Puedes pagar desde la Web o App móvil del Banco</p>
      <h6 className="subtitle">Instrucciones de pago</h6>
      {selectedBank.instructions.map((p, i) =>
        <p key={i}>{activeTab === 'internet' ? <span className="instruction-num">{i + 1}</span> : null} {p}</p>
      )}
      {selectedBank.disclaimer !== [] ? selectedBank.disclaimer.map(text => <p key={text}><span className="disclaimer">(*)</span>{text} </p>) : null}
    </div>
    <a
      id="btn-payment"
      className="btn w-100 text-white"
      href={content.link}
    >
      <img src="assets/icon-arrow.svg" width="24" alt="Go to"/> &nbsp;
      {content.buttonText}
    </a>
  </div>
)
export default TabContent