import React from 'react'
import  CodePage  from './CodePage'
import Money from './Money'


const Main = () => {

  return (
    <section className='container-fluid'>
      <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Banca por Internet</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pagar en efectivo</a>
          </li>
        </ul>
      </nav>
      <div className=' flex container_input row border-0 rounded'>
        <CodePage />
        <Money />
        <div clasName=' align-center subcontainer_input col-4 col-md-4'>
          <p clasName='border'>Texto</p>
        </div>
      </div>
    </section>
  )

}

export default Main;