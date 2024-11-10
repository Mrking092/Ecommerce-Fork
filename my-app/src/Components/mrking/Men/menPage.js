import { useState, useEffect } from "react";
import "./menPage.css";
import * as React from "react";
import Slider from "@mui/material/Slider";
import { Dehaze } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import MUIButton from "../NumberInputWithButtons";

// #0e1017 #16ffbd
export default function MenPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [men, setMen] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(110);
  const [ratingFilter, setRatingFilter] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fetch data from local JSON
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/database/database.json`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const json = await response.json();

        const menData = json.male.map((item) => ({
          ...item,
          price: {
            ...item.price,
            new: parseFloat(item.price.new.replace("$", "")),
            old: parseFloat(item.price.old.replace("$", "")),
          },
        }));

        setMen(menData);
        setFilteredShoes(menData);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  const handleFilterChange = (event, values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleRatingChange = (event, newRating) => {
    setRatingFilter(newRating);
  };

  const applyFilters = () => {
    const filtered = men.filter(
      (shoe) =>
        shoe.price.new >= minPrice &&
        shoe.price.new <= maxPrice &&
        shoe.rating >= ratingFilter
    );
    setFilteredShoes(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [minPrice, maxPrice, ratingFilter, men]);

  return (
    <div>
      <div
        className="flex"
        style={{
          backgroundColor: "#f1f1ef",
          borderColor: "#f1f1ef",
          borderWidth: "50px 20px",
          margin: "0 auto",
          minWidth: "300px",
          maxWidth: "1300px",
        }}
      >
        {isOpen && (
          <div className="sidebar h-[300px] bg-[rgb(204,201,190)] w-[270px] top-[150px] left-[100px] z-[1] shadow-2xl">
            <h1 className="flex justify-start p-5 text-white text-2xl bg-[#6e7051] font-medium font-sans">
              Filter
            </h1>
            <div className="filter p-5 bg-[rgb(204,201,190)]">
              <p className="mb-3 text-white font-semibold">Price Range</p>
              <Slider
                sx={{ color: "#6e7051" }}
                min={50}
                max={110}
                value={[minPrice, maxPrice]}
                onChange={handleFilterChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <MUIButton
                  min={50}
                  max={maxPrice} // Add fallback if maxPrice is undefined
                  value={minPrice} // Fallback for safe initialization
                  onChange={(value) => setMinPrice(value)}
                  label="Min Price"
                />
                <MUIButton
                  min={minPrice}
                  max={110}
                  value={maxPrice} // Fallback to default max if needed
                  onChange={(value) => setMaxPrice(value)}
                  label="Max Price"
                />
              </div>
              <p className="my-3 text-white font-semibold">Rating</p>
              <Rating
                name="half-rating"
                defaultValue={5}
                precision={0.5}
                sx={{ color: "#6e7051" }}
                value={ratingFilter}
                onChange={handleRatingChange}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div
          className="m-auto"
          style={{ backgroundColor: "white", width: "100%" }}
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
          <div className="ourBestSeller pb-24 px-[40px]">
            <div className="headerDiv flex py-10 justify-between">
              <h4 className="text-2xl font-semibold">Our Best Seller</h4>
              <button className="pt-2 border-b-2 border-orange-400 hover:border-black duration-500 font-semibold tracking-wider">
                VIEW ALL BEST SELLERS
              </button>
            </div>
            <div className="mainGrid grid grid-flow-row grid-cols-3 gap-5">
              {filteredShoes.map((item) => (
                <div
                  key={item.name}
                  className="text-center flex flex-col relative"
                >
                  <img
                    className="cursor-pointer"
                    src={item.img}
                    alt={item.name}
                  />
                  <h5 className="cursor-pointer text-xl pt-3">{item.name}</h5>
                  <div className="flex justify-center pt-3">
                    {item.price.old === item.price.new ? (
                      <p className="text-gray-500 font-bold">
                        ${item.price.old}
                      </p>
                    ) : (
                      <>
                        <div className="sale bg-[#6e7051]">Sale!</div>
                        <p className="line-through text-gray-200 font-bold me-2">
                          ${item.price.old}
                        </p>
                        <p className="text-gray-500 font-bold">
                          ${item.price.new}
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
