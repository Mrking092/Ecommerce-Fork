import { useState } from 'react';
import "./menPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function MenPage() {
  const [shoes, setShoes] = useState([
    { id: 1, name: "Nike Air Max", price: 120 },
    { id: 2, name: "Adidas Superstar", price: 80 },
    { id: 3, name: "Converse Chuck Taylor", price: 60 },
    { id: 4, name: "Vans Old Skool", price: 100 },
    { id: 5, name: "New Balance 574", price: 150 }
  ]);

  const [isOpen,setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const [filteredShoes, setFilteredShoes] = useState(shoes);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);

  const handleFilterChange = (event, values) => {
    const minPriceValue = values[0];
    const maxPriceValue = values[1];

    const filteredShoes = shoes.filter((shoe) => {
      return shoe.price >= minPriceValue && shoe.price <= maxPriceValue;
    });

    setFilteredShoes(filteredShoes);
    setMinPrice(minPriceValue);
    setMaxPrice(maxPriceValue);
  };

  return (
    <div>
      {isOpen && <div className="before:"></div>}
      <div className="" style={{ backgroundColor:"#f1f1ef",borderColor:"#f1f1ef",borderWidth:"50px 20px",margin:"0 auto",minWidth:"300px",maxWidth:"1300px"}}>
        <div className="m-auto" style={{backgroundColor:"white",width: "100%",height:"500px"}}>
          <h1 className="p-10 text-7xl font-semibold" style={{color:"#6e7051"}}>Men</h1>
          <div className="filterNSort" style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
            <div className="filter" style={{marginLeft:"20px"}}>
            <button type="button"><span><FontAwesomeIcon icon={faBars}/></span>FILTER SHOES</button>
            </div>
            <div className="sort">
              <button type="button">SORT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
            <div className="filter">
              <Slider
                min={0}
                max={200}`
                value={[minPrice, maxPrice]}
                onChange={handleFilterChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
              <p>Price: ${minPrice} - ${maxPrice}</p>
            </div>

          <div className="shoes">
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="shoe">
                <h2>{shoe.name}</h2>
                <p>Price: ${shoe.price}</p>
              </div>
            ))}
          </div>
*/