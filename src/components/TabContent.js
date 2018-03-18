import React from 'react'
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'

const TabContent = ({ activeTab, id, content }) => (
  <div className={activeTab === id ? 'tab-pane fade show active' : 'tab-pane fade' } id={id} role="tabpanel">
    {content}
    <div id="payment-info" className="d-flex align-items-center">
      <PaymentCode />
      <MoneyInput />
    </div>
  </div>
)

export default TabContent