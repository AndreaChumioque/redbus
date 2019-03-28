import React from 'react'

const Tab = ({ activeTab, setActiveTab }) => (
  <ul className="nav nav-tabs px-3">
    <li className="nav-item">
      <button
        className={activeTab === 'internet' ? 'nav-link py-1 px-2 active' : 'nav-link py-1'}
        data-toggle="tab"
        role="tab"
        onClick={() => setActiveTab('internet')}
      >
        Banca por Internet
      </button>
    </li>
    <li id="cash" className="nav-item">
      <button
        href="#"
        className={activeTab === 'cash' ? 'nav-link py-1 px-2 active' : 'nav-link py-1'}
        data-toggle="tab"
        role="tab"
        onClick={() => setActiveTab('cash')}
      >
        Pagar en efectivo
      </button>
    </li>
  </ul>
)

export default Tab
