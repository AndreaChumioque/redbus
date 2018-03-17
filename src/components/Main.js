import React from 'react'
import  CodePage  from './CodePage'
import Money from '/.Money'

const Main = () => {

  return (
    <section>
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
      <div>
        <CodePage />
        <Money />
      </div>
    </section>
  )

}

export default Main;