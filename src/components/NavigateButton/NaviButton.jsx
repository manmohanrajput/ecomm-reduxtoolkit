import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg"; // Verify the correct path
// import "../css/navibutton.css" // Import the external CSS file
import { filterProducts } from "../../featurs/slices/ProductsSlice"; // Ensure correct path and export
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function NaviButton() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="navi-button-container">
        {buttons.map((button, index) => {
          return (
            <div key={index}>
            <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="navi-button"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="sales-banner">
        <h3>SALES UP TO 50%</h3>
      </div>
      <div className="image-container">
        <img src={clothes} alt="clothes" />
      </div>
    </div>
  );
}

export default NaviButton;
