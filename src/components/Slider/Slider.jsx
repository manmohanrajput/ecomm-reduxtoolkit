import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../../featurs/slices/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/DummyData";
// import "../css/slider.css"; // Import the external CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  console.log("slideIndex", slideIndex);

  return (
    <div className="slider-container">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={`slide ${
                parseInt(item.id) === slideIndex ? "slide-active" : "slide-inactive"
              }`}
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="slide-img" src={item.img} alt="shoes" />
                )}
              </div>
              <div className="slide-text">
                {parseInt(item.id) === slideIndex && item.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="dots-container">
        {sliderData.map((dot, index) => {
          return (
            <div className="dot-container" key={dot.id}>
              <div
                className={`dot ${
                  index === slideIndex ? "dot-active" : "dot-inactive"
                }`}
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="buttons-container">
        <button className="btn" onClick={() => dispatch(prevSlide(slideIndex - 1))}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="btn" onClick={() => dispatch(nextSlide(slideIndex + 1))}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
