import React from 'react'
<<<<<<< HEAD
import PaymentCode  from './PaymentCode'
import MoneyInput from './MoneyInput'
=======
import  CodePage  from './CodePage'
import Money from './Money'

>>>>>>> 0b3a5e855f417d2307a71fa216da369fcb67a711

const Main = () => {
  return (
<<<<<<< HEAD
    <section>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" id="internet-tab" data-toggle="tab" href="#internet" role="tab" aria-selected="true">Banca por Internet</a>
=======
    <section className='container-fluid'>
      <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Banca por Internet</a>
>>>>>>> 0b3a5e855f417d2307a71fa216da369fcb67a711
          </li>
          <li className="nav-item">
            <a className="nav-link" id="cash-tab" data-toggle="tab" href="#cash" role="tab" aria-controls="profile" aria-selected="false">Pagar en efectivo</a>
          </li>
        </ul>
<<<<<<< HEAD
        <div className="tab-content">
          <div className="tab-pane fade show active" id="internet" role="tabpanel" aria-labelledby="internet-tab">Hola</div>
          <div className="tab-pane fade" id="cash" role="tabpanel" aria-labelledby="cash-tab">Hola 2</div>
        </div>
      <div>
        <PaymentCode />
        <MoneyInput />
=======
      </nav>
      <div className=' flex container_input row border-0 rounded'>
        <CodePage />
        <Money />
        <div clasName=' align-center subcontainer_input col-4 col-md-4'>
          <p clasName='border'>Texto</p>
        </div>
>>>>>>> 0b3a5e855f417d2307a71fa216da369fcb67a711
      </div>
    </section>
  )

}

export default Main;