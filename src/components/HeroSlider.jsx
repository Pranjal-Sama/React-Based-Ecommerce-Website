import { useState, useEffect } from "react";
import banners from "../data/banners";

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  
  // Auto-rotate banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === banners.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    setCurrent((c) => (c === banners.length - 1 ? 0 : c + 1));
  }
  function prevSlide() {
    setCurrent((c) => (c === 0 ? banners.length - 1 : c - 1));
  }
  
  const currentBanner = banners[current];

  return (
    <div className="hero-slider">
      <div className="hero-slider__img-wrap">
        <img
          src={currentBanner.image}
          alt={currentBanner.title}
          className="hero-slider__img"
        />
      </div>
      <div className="hero-slider__content">
        <div className="hero-slider__badge">{currentBanner.discount}</div>
        <h1>{currentBanner.title}</h1>
        <p className="hero-slider__subtitle">{currentBanner.subtitle}</p>
        
        <div className="hero-slider__specs">
          <h3>Key Specs:</h3>
          <ul>
            {currentBanner.specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>
        
        <div className="hero-slider__footer">
          <div className="hero-slider__price">
            <span className="price-label">Starting at</span>
            <span className="price-value">{currentBanner.price}</span>
          </div>
          <button className="hero-slider__btn">Shop Now</button>
        </div>
        
        <div className="hero-slider__controls">
          <button onClick={prevSlide} className="control-btn">&#9664;</button>
          <button onClick={nextSlide} className="control-btn">&#9654;</button>
        </div>
        <div className="hero-slider__dots">
          {banners.map((_, idx) => (
            <span
              key={idx}
              className={"hero-slider__dot" + (idx === current ? " active" : "")}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;