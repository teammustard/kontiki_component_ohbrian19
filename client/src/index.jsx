import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Popup from './components/popup.jsx'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allReviews: [{}], // all the reviews
      modalToggle: false // state of modal button popup
    };
  
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount () {
    this.getAllReviews();
  }
  
  toggleModal () {
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }

  getAllReviews() { // get all the reviews
    axios.get('/api/items') //  /${id}
    .then((data) => {
      this.setState({
        allReviews: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render () {
    return (
      <div>
        <h2>REVIEWS</h2>
        <div>for Argentina & Brazil Experience</div>
        <div>
          {/* {the middle part goes here} */}
        </div>
        <Popup show={this.state.modalToggle} handleClose={this.toggleModal} reviews={this.state.allReviews} />
        <button type="button" onClick={this.toggleModal}>READ ALL REVIEWS</button>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
