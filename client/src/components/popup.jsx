import React from "react";
import Review from "./review.jsx";
import Graph from "./graph.jsx";

const Popup = ({
  show,
  handleClose,
  reviews,
  getAllReviews,
  one,
  two,
  three,
  four,
  five,
  displayReviews,
  handleStarChange,
  selected,
  backgroundColor
}) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="stickyTop">
          Reviews
          <button className="buttonX" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="container">
          <div className="leftCol">
            <div className="reviewTitle">ARGENTINA & BRAZIL EXPERIENCE</div>
            <br />
            <div>
              Showing
              <select
                id="starsRate"
                onChange={handleStarChange}
                selected
                value={selected}
              >
                <option value="0">MOST RECENT</option>
                <option value="5">FIVE STARS</option>
                <option value="4">FOUR STARS</option>
                <option value="3">THREE STARS</option>
                <option value="2">TWO STARS</option>
                <option value="1">ONE STAR</option>
              </select>
              from
              <select>
                <option value="WORLDWIDE">WORLDWIDE</option>
                <option value="NEAR ME">NEAR ME</option>
              </select>
              <button onClick={getAllReviews}>RESET</button>
              {displayReviews.length > 0
                ? displayReviews.map((review, index) => {
                    return <Review key={index} review={review} />;
                  })
                : null}
            </div>
          </div>
          <div className="rightCol">
            <Graph
              reviews={reviews}
              one={one}
              two={two}
              three={three}
              four={four}
              five={five}
              handleStarChange={handleStarChange}
              backgroundColor={backgroundColor}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popup;
