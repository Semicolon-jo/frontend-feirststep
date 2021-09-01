import React from 'react'
import Profile from './Profile'
import Header2 from './Header2';
const axios = require('axios');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UniversityData: [],
      countryData: [],
      show: false

    }
  }
  getUniversity = async (event) => {
    event.preventDefault();
    let country = event.target.city.value;
    console.log(country);
    let unvirsityURL = `http://localhost:3001/search?country=${country}`;
    let Data = await axios.get(unvirsityURL);

    this.setState({
      UniversityData: Data.data[1],
      countryData: Data.data[0],
      show: true
    })
    // console.log(this.state.countryData);

  }

  
  render() {
    return (
      <>
        <Header2 getUniversity={this.getUniversity} />
        <Profile UniversityData={this.state.UniversityData} countryData={this.state.countryData} show={this.state.show} />
        
      </>
    )
  }
}

export default Main;
