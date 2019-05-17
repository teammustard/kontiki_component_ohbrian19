import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Popup from './components/popup.jsx'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allReviews: [], // all the reviews
      modalToggle: false // state of modal button popup
    };
  
    this.toggleModal = this.toggleModal.bind(this);
    this.sortReviewsByStar = this.sortReviewsByStar.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() { // get all the reviews from db
    return axios.get('/kontiki/reviews')
    .then((data) => {
      this.setState({
        allReviews: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  sortReviewsByStar() { // sorts reviews by star when clicked
    let id = document.getElementById("starsRate").value
    if (id === 'MOST RECENT') {
      this.getAllReviews();
    } else {
      return axios.get(`/kontiki/stars/${id}`)
      .then((data) => {
        this.setState({
          allReviews: data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
 
  toggleModal() { // when click on button, change the state
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }

  render () {
    return (
      <div>
        <div className="reviewsTitle">REVIEWS</div>
        <div className="tourTitle">for Argentina & Brazil Experience</div>
        <div>
          {/* {the middle part goes here} */}
        </div>
        <Popup show={this.state.modalToggle} handleClose={this.toggleModal} reviews={this.state.allReviews} handleSortChange={this.sortReviewsByStar} getAllReviews={this.getAllReviews}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div align="center">
          <button className="readAllButton" onClick={this.toggleModal}>READ ALL REVIEWS</button>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
