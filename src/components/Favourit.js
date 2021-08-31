import React from 'react';
const axios = require('axios');

class Favourit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FavData: []
        }
    }
    
    // componentDidMount = async () => {
    //     let email = this.props.auth0.user.email;
    //     // http://localhost:3001/faviorate?email=email
    //     let FavouriteData = await axios.get(`http://localhost:3001/faviorate?email=${email}`);
    //     this.setState({
    //         FavData: FavouriteData.data
    //     })
    //     console.log(this.state.FavData);
    // }

    render() {
        return (
            <>
                <h1> Favourit Page</h1>
            </>
        )
    }
}

export default Favourit;
