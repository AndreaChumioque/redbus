import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'
import Clock from './Clock'



const TabContent = ({ activeTab, id, content }) => (
  <div className={activeTab === id ? 'tab-pane fade show active' : 'tab-pane fade' } id={id} role="tabpanel">
  
    <div id="payment-info" className="d-flex align-items-center">
      <PaymentCode />
      <MoneyInput />
      {/* <Clock date={getHours()}/> */}
      <Clock/>
    </div>
    <p> {content}</p>
  </div>
)

export default TabContent