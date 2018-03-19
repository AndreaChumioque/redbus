import React from 'react'
import TabContent from './TabContent'

const data = {
  tabs: [
    {id: 'internet', content: 'hola'},
    {id: 'cash', content: 'hola2'}
  ],
  paymentCode: '',
  totalAmount: 0,
  activeTab: 'internet'
}

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
      {/* <div>
        <PaymentCode />
        <MoneyInput />
      <div className=' flex container_input row border-0 rounded'>
        <PaymentCode />
        <MoneyInput />
        <div className=' align-center subcontainer_input col-4 col-md-4'>
          <p className='border'>Texto</p>
        </div>
      </div>
      </div> */}
      <div className="tab-content">
        {data.tabs.map(tab =>
          <TabContent key={tab.id} activeTab={data.activeTab} id={tab.id} content={tab.content} />
        )}
      </div>
    </section>
  )

}

export default Main;