import React from 'react'
import TabContent from './TabContent'

const data = {
  tabs: [
    {id: 'internet', content: 'hola'},
    {id: 'cash', content: 'hola2'}
  ],
  paymentCode: '',
  totalAmount: 0,
  defaultTab: 'internet'
}

const Main = () => {
  return (
    <section className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item ml-3">
          <a className="nav-link active" id="internet-tab" data-toggle="tab" href="#internet" role="tab" aria-selected="true">Banca por Internet</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="cash-tab" data-toggle="tab" href="#cash" role="tab" aria-controls="profile" aria-selected="false">Pagar en efectivo</a>
        </li>
      </ul>
      <div className="tab-content p-3">
        {data.tabs.map(tab =>
          // <TabContent key={tab.id} activeTab={data.activeTab} id={tab.id} content={tab.content} />
          <TabContent key={tab.id} {...tab} defaultTab={data.defaultTab} />
        )}
      </div>
    </section>
  )

}

export default Main