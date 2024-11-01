import { useState, useEffect } from "react";
import "./menPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Dehaze } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

export default function MenPage() {
  const [shoes, setShoes] = useState([
    { id: 1, name: "Nike Air Max", price: 120 },
    { id: 2, name: "Adidas Superstar", price: 80 },
    { id: 3, name: "Converse Chuck Taylor", price: 60 },
    { id: 4, name: "Vans Old Skool", price: 100 },
    { id: 5, name: "New Balance 574", price: 150 },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = (event) => {
    if (!event.target.closest(".filter") && !event.target.closest(".sidebar")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseSidebar);
    return () => {
      document.removeEventListener("click", handleCloseSidebar);
    };
  }, []);

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
  // Getting Male Shoes Data

  const [men, setMen] = useState([]);
  async function test() {
    try {
      const response = await fetch(
        `http://localhost:3000/database/database.json`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setMen(json.male);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    test();
  }, []);
  console.log(men);

  return (
    <div>
      {isOpen && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
          onClick={toggleMenu}
        ></div>
      )}
      {isOpen && (
        <div
          className="sidebar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "320px",
            height: "100vh",
            backgroundColor: "white",
            zIndex: 2,
          }}
        >
          <div className="filter">
            <Slider
              min={0}
              max={200}
              value={[minPrice, maxPrice]}
              onChange={handleFilterChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
            <p>
              Price: ${minPrice} - ${maxPrice}
            </p>
          </div>
          <div className="shoes">
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="shoe">
                <h2>{shoe.name}</h2>
                <p>Price: ${shoe.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        style={{
          backgroundColor: "#f1f1ef",
          borderColor: "#f1f1ef",
          borderWidth: "50px 20px",
          margin: "0 auto",
          minWidth: "300px",
          maxWidth: "1300px",
        }}
      >
        <div
          className="m-auto"
          style={{ backgroundColor: "white", width: "100%"}}
        >
          <h1
            className="p-10 text-7xl font-semibold mb-10"
            style={{ color: "#6e7051" }}
          >
            Men
          </h1>
          <div
            className="filterNSort"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div className="filter" style={{ marginLeft: "40px" }}>
              <Button
                onClick={toggleMenu}
                component="label"
                role={"button"}
                tabIndex={-1}
                startIcon={<Dehaze />}
                sx={{
                  color: "white",
                  backgroundColor: "#6e7051",
                  padding: "10px 20px",
                }}
              >
                Filter Shoes
              </Button>
            </div>
            <div className="sort" style={{ marginRight: "50px" }}>
              <button type="button">SORT</button>
            </div>
          </div>
          <div className="ourBestSeller pb-24 px-[1.5%]">
            <div className="headerDiv flex py-10 justify-between">
              <h4 className="text-2xl font-semibold">Our Best Seller</h4>
              <button className="pt-2 border-b-2 border-orange-400 hover:border-black duration-500 font-semibold tracking-wider">
                VIEW ALL BEST SELLERS
              </button>
            </div>
          <div className="mainGrid grid grid-flow-row grid-cols-3 gap-5">
            {men.map((item) => (
              <div className="text-center flex flex-col relative">
                <img className="cursor-pointer" src={item.img} />
                <h5 className="cursor-pointer text-xl pt-3">{item.name}</h5>
                <div className="flex justify-center pt-3">
                  {item.price.old == item.price.new ? (
                    <p className="text-gray-500 font-bold">{item.price.old}</p>
                  ) : (
                    <>
                      <div className="sale bg-[#6e7051]">Sale!</div>
                      <p className="line-through text-gray-200 font-bold me-2">
                        {item.price.old}
                      </p>
                      <p className="text-gray-500 font-bold">
                        {item.price.new}
                      </p>
                    </>
                  )}
                </div>
                <div className="pt-3">
                  <Rating
                    name="half-rating-read"
                    value={item.rating || 0}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
