import React from "react";
import PopupReview from "./popupReview.jsx";
import PopupGraph from "./popupGraph.jsx";
import JwPagination from "jw-react-pagination";



class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ 
      pageOfItems 
    });
  }

  render() {
    const customLabels = {
      previous: '<',
      next: '>'
    }
    return (
      <div className={this.props.show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <div className="modalHeaderSticky">
            &nbsp;&nbsp;&nbsp;&nbsp;Reviews
            <button className="modalHeaderClose" onClick={this.props.handleClose}>
              ✕
            </button>
          </div>

          <div className="popupTitle">
            <div className="popupTitleTour">ARGENTINA & BRAZIL EXPERIENCE</div>
          </div>

          <div className="popupSortCategory">
            <div className="popupSortCategoryStar">
              <span className="popupSortCategoryStarShowing">
                Showing&nbsp;
              </span>
              <span className="popupSortCategoryStar-select">
                <select
                  id="starsRate"
                  onChange={this.props.handleStarChange}
                  selected
                  value={this.props.selected}
                >
                  <option value="0">MOST RECENT</option>
                  <option value="5">FIVE STARS</option>
                  <option value="4">FOUR STARS</option>
                  <option value="3">THREE STARS</option>
                  <option value="2">TWO STARS</option>
                  <option value="1">ONE STAR</option>
                </select>
              </span>
              <span className="popupSortCategoryLocationFrom">
                &nbsp;&nbsp;From&nbsp;
              </span>
              <select>
                <option value="WORLDWIDE">WORLDWIDE</option>
                <option value="NEAR ME">NEAR ME</option>
              </select>
              &nbsp;&nbsp;
              <button className="resetButton" onClick={this.props.getAllReviews}>
                RESET
              </button>
            </div>
          </div>

          <div className="container">
            <div className="leftCol">
              {this.state.pageOfItems.length > 0
                ? this.state.pageOfItems.map((review, index) => {
                    return <PopupReview key={index} review={review} />;
                  })
                : null}
              <div className="paginationMain">
                {/* <div>
                  {this.state.pager.currentPage} of {this.state.pager.totalpages}
                </div> */}
                <JwPagination items={this.props.displayReviews} onChangePage={this.onChangePage} labels={customLabels}/>
              </div>
            </div>
            <div className="rightCol">
              <PopupGraph
                reviews={this.props.reviews}
                one={this.props.one}
                two={this.props.two}
                three={this.props.three}
                four={this.props.four}
                five={this.props.five}
                handleStarChange={this.props.handleStarChange}
                backgroundColor={this.props.backgroundColor}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Popup;


// const Popup = ({
//   show,
//   handleClose,
//   reviews,
//   getAllReviews,
//   one,
//   two,
//   three,
//   four,
//   five,
//   displayReviews,
//   handleStarChange,
//   selected,
//   backgroundColor
// }) => {

//   return (
//     <div className={show ? "modal display-block" : "modal display-none"}>
//       <section className="modal-main">
//         <div className="modalHeaderSticky">
//           &nbsp;&nbsp;&nbsp;&nbsp;Reviews
//           <button className="modalHeaderClose" onClick={handleClose}>
//             ✕
//           </button>
//         </div>

//         <div className="popupTitle">
//           <div className="popupTitleTour">ARGENTINA & BRAZIL EXPERIENCE</div>
//         </div>

//         <div className="popupSortCategory">
//           <div className="popupSortCategoryStar">
//             <span className="popupSortCategoryStarShowing">Showing&nbsp;</span>
//             <span className="popupSortCategoryStar-select">
//               <select id="starsRate" onChange={handleStarChange} selected value={selected}>
//                 <option value="0">MOST RECENT</option>
//                 <option value="5">FIVE STARS</option>
//                 <option value="4">FOUR STARS</option>
//                 <option value="3">THREE STARS</option>
//                 <option value="2">TWO STARS</option>
//                 <option value="1">ONE STAR</option>
//               </select>
//             </span>
//             <span className="popupSortCategoryLocationFrom">&nbsp;&nbsp;From&nbsp;</span>
//             <select>
//               <option value="WORLDWIDE">WORLDWIDE</option>
//               <option value="NEAR ME">NEAR ME</option>
//             </select>
//             &nbsp;&nbsp;
//             <button className="resetButton" onClick={getAllReviews}>RESET</button>
//           </div>
//         </div>

//         <div className="container">
//           <div className="leftCol">
//             {displayReviews.length > 0
//               ? displayReviews.map((review, index) => {
//                   return (
//                   <PopupReview key={index} review={review} />
//                   )
//                 })
//               : null}
//               {/* <JwPagination items={displayReviews} onChangePage={onChangePage} /> */}
//           </div>
//           <div className="rightCol">
//             <PopupGraph
//               reviews={reviews}
//               one={one}
//               two={two}
//               three={three}
//               four={four}
//               five={five}
//               handleStarChange={handleStarChange}
//               backgroundColor={backgroundColor}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

