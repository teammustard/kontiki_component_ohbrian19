import React from "react";
import PopupReview from "./popupReview.jsx";
import PopupGraph from "./popupGraph.jsx";
import JwPagination from "jw-react-pagination";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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
      previous: "<",
      next: ">"
    };
    return (
      <div
        className={
          this.props.show ? "modalPopup displayPopup-block" : "modalPopup displayPopup-none"
        }
      >
        <section className="modalPopup-main">
          <div className="modalHeaderSticky">
            &nbsp;&nbsp;&nbsp;&nbsp;Reviews
            <button
              className="modalHeaderClose"
              onClick={this.props.handleClose}
            >
              ✕
            </button>
          </div>

          <div className="popupTitle">
            <div className="popupTitleTour">
              {this.props.title.toUpperCase()}
            </div>
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
                  {this.props.five !== 0 ? (
                    <option value="5">FIVE STARS</option>
                  ) : null}
                  {this.props.four !== 0 ? (
                    <option value="4">FOUR STARS</option>
                  ) : null}
                  {this.props.three !== 0 ? (
                    <option value="3">THREE STARS</option>
                  ) : null}
                  {this.props.two !== 0 ? (
                    <option value="2">TWO STARS</option>
                  ) : null}
                  {this.props.one !== 0 ? (
                    <option value="1">ONE STARS</option>
                  ) : null}
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
              <button
                className="resetButton"
                onClick={this.props.getAllReviews}
              >
                RESET
              </button>
            </div>
          </div>

          <div className="containerPopup">
            <div className="leftCol">
              <Element name="nestedContainer" id="containerElement">
                {this.state.pageOfItems.length > 0
                  ? this.state.pageOfItems.map((review, index) => {
                      return <PopupReview key={index} review={review} />;
                    })
                  : null}
              </Element>
              <div className="paginationMain">
                {/* <div>
                  {this.state.pager.currentPage} of {this.state.pager.totalpages}
                </div> */}
                <JwPagination
                  items={this.props.displayReviews}
                  onChangePage={this.onChangePage}
                  labels={customLabels}
                />
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
