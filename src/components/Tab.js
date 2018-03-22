import React from 'react'

const Tab = ({ activeTab, setActiveTab }) => (
  <ul className="nav nav-tabs px-3">
    <li className="nav-item">
      <a className={activeTab === 'internet' ? 'nav-link py-1 active' : 'nav-link py-1'} data-toggle="tab" role="tab" onClick={() => setActiveTab('internet')} >Banca por Internet</a>
    </li>
    <li id="cash" className="nav-item">
      <a className={activeTab === 'cash' ? 'nav-link py-1 active' : 'nav-link py-1'} data-toggle="tab" role="tab" onClick={() => setActiveTab('cash')}>Pagar en efectivo</a>
    </li>
  </ul>
)

export default Tab