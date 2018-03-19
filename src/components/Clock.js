import React from 'react'


const Clock = (date) => (


  <div className=' col-4 col-md-4 container_clock rounded-right'>
    <img className='clock float-left' src="https://image.flaticon.com/icons/svg/19/19851.svg" alt="" />
    <p className='text-center'>Tu orden expirará </p>
  </div>
)



//   <div>
//     <p> Su pedido expira</p>
//     <p>  {date} </p>
//   </div>
//   )

//   setInterval(date, 1000);

export default Clock