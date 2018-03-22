import React from 'react'
import TabContainer from '../containers/TabContainer'

const Main = () => {
  return (
    <section className="container px-0">
      <ul className="nav nav-tabs px-3">
        <li className="nav-item">
          <a className="nav-link py-1" data-toggle="tab" role="tab" >Banca por Internet</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-1" data-toggle="tab" role="tab">Pagar en efectivo</a>
        </li>
      </ul>
      <div className="tab-content p-3">
        <TabContainer />
      </div>
    </section>
  )

}

export default Main