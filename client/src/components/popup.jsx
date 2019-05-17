import React from 'react';
import Review from './review.jsx';
// import { Container, Row, Col } from 'reactstrap';

const Popup = ({show, handleClose, reviews, handleSortChange, getAllReviews}) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="stickyTop"> 
          Reviews
          <button className="buttonX" onClick={handleClose}>X</button>
        </div>
        <br></br>
        <div>
          <div className="reviewTitle">ARGENTINA & BRAZIL EXPERIENCE</div>
          <br></br>
          <div>
            Showing
            <select id="starsRate" onChange={handleSortChange}>
              <option value="MOST RECENT">MOST RECENT</option>
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
          </div>
          <br></br>
          <br></br>
          <div>
            {reviews.length > 0 ? reviews.map((review, index) => {
              return (
                <Review key={index} review={review}/>
              )
            }) : null}
          </div>
        </div>
      </section>
    </div>
  )
};
   

export default Popup;