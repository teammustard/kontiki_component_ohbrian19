import React from "react";
import axios from "axios";
import Popup from "./components/popup.jsx";
import SliderComponent from "./components/sliderComponent.jsx";

class Tours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [], 
      title: "",
      displayReviews: [], 
      modalToggle: false, 
      selected: 0, 
      oneStar: 0, 
      twoStar: 0,
      threeStar: 0, 
      fourStar: 0,
      fiveStar: 0 
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.numberOfStars = this.numberOfStars.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
    this.backgroundColor = this.backgroundColor.bind(this);
    this.getTourTitle = this.getTourTitle.bind(this);
  }

  componentDidMount() {
    this.getTourTitle();
    this.getAllReviews();
  }
  
  getAllReviews() {
    return axios
      .get(window.location.href.includes("localhost") ? `/tours/review/${this.props.match.params.tourId}` : `http://3.130.80.144:3001/tours/review/${this.props.match.params.tourId}`)
      .then(data => {
        this.setState(
          {
            allReviews: data.data,
            displayReviews: data.data,
            selected: 0
          },  
          () => {
            if (this.state.oneStar === 0 && this.state.fiveStar === 0) {
              this.numberOfStars();
            }
          }
        );
      })
      .catch(err => {
        console.log(window.location.href)
        console.log(err);
        
      })
  }
  
  getTourTitle() {
    return axios
      .get(window.location.href.includes("localhost") ? `/tours/title/${this.props.match.params.tourId}` : `http://3.130.80.144:3001/tours/title/${this.props.match.params.tourId}`)
      .then(data => {
        this.setState({
          title: data.data.tour_title
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleStarChange(e) {
    let id = e.target.id;
    let stars;
    if (!Number(id)) {
      id = document.getElementById("starsRate").value;
    }
    if (id === "1") {
      stars = this.state.oneStar;
    } else if (id === "2") {
      stars = this.state.twoStar;
    } else if (id === "3") {
      stars = this.state.threeStar;
    } else if (id === "4") {
      stars = this.state.fourStar;
    } else if (id === "5") {
      stars = this.state.fiveStar;
    }

    
    if (stars !== 0) {
      return axios
        .get(window.location.href.includes("localhost") ? `/tours/stars/${this.props.match.params.tourId}` : `http://3.130.80.144:3001/tours/stars/${this.props.match.params.tourId}`)
        .then(data => {
          if (this.state.selected === id || id === "0") {
            this.getAllReviews();
          } else {
            this.setState({
              displayReviews: data.data,
              selected: id
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  backgroundColor(selected) {
    if (this.state.selected === selected) {
      return { background: "#FFC432" };
    }
  }

  numberOfStars() {
    for (let i = 0; i < this.state.allReviews.length; i++) {
      if (this.state.allReviews[i].star_rating === 1) {
        this.setState({
          oneStar: (this.state.oneStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 2) {
        this.setState({
          twoStar: (this.state.twoStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 3) {
        this.setState({
          threeStar: (this.state.threeStar += 1)
        });
      } else if (this.state.allReviews[i].star_rating === 4) {
        this.setState({
          fourStar: (this.state.fourStar += 1)
        });
      } else {
        this.setState({
          fiveStar: (this.state.fiveStar += 1)
        });
      }
    }
  }

  toggleModal() {
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  }

  render() {
    return (
      <div>
        <div className="outerBackground" />
        <div className="mainBox">
          <div className="mainBoxTitle">
            <div className="mainBoxTitleReviews">REVIEWS</div>
            <div className="mainBoxTitleTour">{this.state.title}</div>
          </div>
          {this.state.allReviews.length > 0 ? (
            <SliderComponent
              reviews={this.state.allReviews}
              displayReviews={this.state.displayReviews}
              one={this.state.oneStar}
              two={this.state.twoStar}
              three={this.state.threeStar}
              four={this.state.fourStar}
              five={this.state.fiveStar}
              handleStarChange={this.handleStarChange}
              backgroundColor={this.backgroundColor}
              directPopup={this.toggleModal}
            />
          ) : null}
          <br />
          <div align="center">
            <button className="readAllButton" onClick={this.toggleModal}>
              READ ALL REVIEWS
            </button>
          </div>
          <Popup
            show={this.state.modalToggle}
            handleClose={this.toggleModal}
            reviews={this.state.allReviews}
            displayReviews={this.state.displayReviews}
            getAllReviews={this.getAllReviews}
            one={this.state.oneStar}
            two={this.state.twoStar}
            three={this.state.threeStar}
            four={this.state.fourStar}
            five={this.state.fiveStar}
            handleStarChange={this.handleStarChange}
            selected={this.state.selected}
            backgroundColor={this.backgroundColor}
            title={this.state.title}
          />
        </div>
        <div className="outerBackground" />
      </div>
    );
  }
}

export default Tours;
