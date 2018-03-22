import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1
};

const styleSelected = {
  border: '2px solid #E0AA00'
}

const MultipleItems = ({banks, setSelectedBank, selectedBank}) => (
  <div>
    <Slider {...settings}>
      {banks.map(bank =>
        <div className="p-2 p-md-3"
          key={bank.name}
          onClick={() => setSelectedBank(bank)}
        >
          <img
            src={bank.image}
            alt={bank.name}
            style={bank.name === selectedBank.name ? {...styleSelected, cursor: 'pointer'} : {cursor: 'pointer', border: '2px solid #FFD87F'}}
          />
          {bank.text !== '' ? <p className='text-center'>{bank.text}</p> : null}
        </div>
      )}
    </Slider>
 </div>
)

export default MultipleItems