import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Movix",
    image: ImageOne,
    link: "https://github.com/tru23/Projects/tree/main/api%20project",
  },
  {
    id: 2,
    name: "BackEnd",
    link: "https://github.com/tru23/Backend_Assignment",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Elites",
    image: ImageThree,
    link: "https://github.com/tru23/FSD_miniproject",
  },
  {
    id: 2,
    name: "Twitter Sentiment Analysis",
    image: ImageFour,
    link: "https://github.com/tru23/Twitter-Sentiment-Analysis-1",
  },
  {
    id: 2,
    name: "StepSure",
    image: ImageFive,
    link: "",
  },
  {
    id: 2,
    name: "Weather App",
    image: ImageSix,
    link: "https://github.com/tru23/Weather-App",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
      
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link ? item.link : "#"} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link ? item.link : "#"} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
