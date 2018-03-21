import React from 'react'

var d = new Date();

console.log(d.getHours());
const Clock = (date) => (


  <div className=' col-4 col-md-4 container_clock rounded-right'>
    <img className='clock float-left' src="https://image.flaticon.com/icons/svg/19/19851.svg" alt="" />
    <p className='text-center'>Tu orden expirará </p>
    <p><span>{d.getHours()}</span>
    <span> :{d.getMinutes()}</span>
    
    </p>
  </div>
)

export default Clock