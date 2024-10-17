import "./menPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Range } from 'react-range';

export default function MenPage() {
  const [shoes, setShoes] = useState([
    { id: 1, name: "Nike Air Max", price: 120 },
    { id: 2, name: "Adidas Superstar", price: 80 },
    { id: 3, name: "Converse Chuck Taylor", price: 60 },
    { id: 4, name: "Vans Old Skool", price: 100 },
    { id: 5, name: "New Balance 574", price: 150 }
  ]);

  const [filteredShoes, setFilteredShoes] = useState(shoes);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);

  const handleFilterChange = (values) => {
    const minPriceValue = values[0];
    const maxPriceValue = values[1];

    const filteredShoes = shoes.filter((shoe) => {
      return shoe.price >= minPriceValue && shoe.price <= maxPriceValue;
    });

    setFilteredShoes(filteredShoes);
    setMinPrice(minPriceValue);
    setMaxPrice(maxPriceValue);
  };

  const renderThumb = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          backgroundColor: '#6e7051',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
        }}
      />
    );
  };

  const renderTrack = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          height: '10px',
          width: '100%',
          borderRadius: '4px',
          backgroundColor: '#ccc',
          opacity: 0.3,
        }}
      />
    );
  };

  return (
    <div className="" style={{ backgroundColor:"#f1f1ef",borderColor:"#f1f1ef",borderWidth:"50px 20px",margin:"0 auto",minWidth:"300px",maxWidth:"1300px"}}>
      <div className="m-auto" style={{backgroundColor:"white",width: "100%",height:"500px"}}>
        <h1 className="p-10 text-7xl font-semibold" style={{color:"#6e7051"}}>Men</h1>
        <div className="filterNSort">
          <div className="filter">
            <Range
              step={1}
              min={0}
              max={200}
              values={[minPrice, maxPrice]}
              onChange={handleFilterChange}
              renderTrack={renderTrack}
              renderThumb={renderThumb}
            />
            <p>Price: ${minPrice} - ${maxPrice}</p>
            <button type="button"><span><FontAwesomeIcon icon={faBars}/></span>FILTER SHOES</button>
          </div>
        </div>
      </div>
    </div>
  );
}