import React from "react";
import StarRatings from "react-star-ratings";
import SliderReview from "./sliderReview.jsx";
import Slider from "react-slick";

const SliderComponent = ({ reviews, one, two, three, four, five }) => {
  let total = one + two * 2 + three * 3 + four * 4 + five * 5;
  let average = total / reviews.length;
  let round = Math.round(average * 2) / 2;
  let settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div>
      <Slider {...settings}>
        <div align="center">
          <div>
            <div className="averageRating">{average}</div>
            <div>
              <StarRatings
                rating={round || 0}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
            <br />
            <div>{reviews.length} independent reviews</div>
          </div>
        </div>
        <div>
          <div>
            <div>Filter by traveller’s rating</div>
            <div>
              <div>
                <div>
                  ★ 5 <span className="starBackground">{one}</span>
                </div>
              </div>
              <div>
                <div>
                  ★ 4 <span className="starBackground">{two}</span>
                </div>
              </div>
              <div>
                <div>
                  ★ 3 <span className="starBackground">{three}</span>
                </div>
              </div>
              <div>
                <div>
                  ★ 2 <span className="starBackground">{four}</span>
                </div>
              </div>
              <div>
                <div>
                  ★ 1 <span className="starBackground">{five}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {reviews.slice(0, 20).map((review, index) => {
          return <SliderReview key={index} review={review} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
