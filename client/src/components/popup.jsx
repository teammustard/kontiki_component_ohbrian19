import React from 'react';
import Review from './review.jsx'

const Popup = ({show, handleClose, reviews}) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div>
          <h3>ARGENTINA & BRAZIL EXPERIENCE</h3>
          Showing
          <select>
            <option value="MOST RECENT">MOST RECENT</option>
            <option value="FIVE STARS">FIVE STARS</option>
            <option value="FOUR STARS">FOUR STARS</option>
            <option value="THREE STARS">THREE STARS</option>
            <option value="TWO STARS">TWO STARS</option>
            <option value="ONE STAR">ONE STAR</option>
          </select>
          from
          <select>
            <option value="WORLDWIDE">WORLDWIDE</option>
            <option value="NEAR ME">NEAR ME</option>
          </select>
          <button>RESET</button>
          <div>
            {reviews.length > 0 ? reviews.map((review, index) => {
              return (
                <Review key={index} review={review}/>
              )
            }) : null}
          </div>
        </div>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )
};
   

export default Popup;