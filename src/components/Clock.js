import React from 'react'
import moment from 'moment'

const d = new Date();
d.setHours(d.getHours() + 2);

const Clock = (date) => (
  <div className="col-5 col-md-4 container_clock rounded-right d-flex flex-row align-items-center justify-content-center p-2 subcontainer_input_Time">
    <img id="icon-time" src="assets/icon-time.svg" alt="Time"/>
    <p className="text-center mb-0">Tu orden expirará <br/> <span id="remainingTime">{moment(d).format('lll')}</span></p>
  </div>
)

export default Clock