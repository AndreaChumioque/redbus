import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {connect}from 'react-redux'

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 3
};

const Banks = [
  {
    name: 'BCP',
    image: 'http://www.vanguardia.com/sites/default/files/imagecache/Noticia_600x400/foto_grandes_400x300_noticia/2017/09/27/web_colp_lr_00124_big_ce.jpg',
    parrafo: "Agentes y Bodegas Agentes"
  },
  {
    name: 'Continetal',
    image: 'http://los40es00.epimg.net/los40/imagenes/2017/03/03/album/1488558235_232070_1488558651_album_normal.jpg',
    parrafo: "Agentes y Bodegas Agentes"
  },

  {
    name: 'Interbank',
    image: 'http://www.entrebellas.com/wp-content/uploads/2015/10/artista-emmna.jpg',
    parrafo: 'Agentes y Bodegas Agentes'
  },
  {
    name: 'Selena Gomez',
    image: 'http://los40es00.epimg.net/los40/imagenes/2017/03/03/album/1488558235_232070_1488558651_album_normal.jpg',
    parrafo: "Agentes y Bodegas Agentes"
  },

  {
    name: 'Emma Watson',
    image: 'http://www.entrebellas.com/wp-content/uploads/2015/10/artista-emmna.jpg',
    parrafo: 'Agentes y Bodegas Agentes'
  }
]
const MultipleItems = (obj,setting,onclick) => (


   <div>
  {/* //   {console.log({...settings})}
  //   <Slider {...settings}>
  //       {Banks.map((obj, i) =>
  //         <div >
  //           <img  onclick={()=>props.dispatch({
  //             type:'TEXT_BANCK'
  //             })}src={obj.image} alt=""width='20px' />
  //           <p className='text-center  agentes'>{obj.parrafo}</p>
  //         </div>

  //       )}

//     </Slider>
//     <span>{} </span> */}
  </div>
 )
const mapStateToProps=(state)=>({

})

export default MultipleItems