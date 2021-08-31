import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
const axios = require('axios');
class Favourit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: []
        }

    }

    componentDidMount =  () => {
    this.addFav();

    }
    addFav = async () => {
        try {
            const { user } = this.props.auth0;
            if (user) {
                //  setTimeout((data) => {
                let url = `http://localhost:3001/faviorate?email=${user.email}`;
                // console.log(user.email);
                let favouriteData = await axios.get(url);
                console.log("FavouriteData:", favouriteData.data);
                let Data =  favouriteData.data;
                this.setState({
                    favData:Data
                })
                //     }, 5000)
                console.log('Favourit list', this.state.favData);
            }

        } catch (error) {
            console.log(error);
        }
    }
    // ${process.env.REACT_APP_SERVER}/deleteBook/${bookID}?email=${user.email}
    // http://localhost:3000//deleteBook/${universityId}?email=${email}
    deleteFromFav = async (universityId)=>{
        const { user } = this.props.auth0;
        console.log('uni ID', universityId);
        let FavouriteData = await axios.delete(`http://localhost:3001/delete/${universityId}?email=${user.email}`);
       await this.setState({
            FavData: FavouriteData.data
        })
        this.addFav();
    }

    render() {
        const posts = this.state.favData?.map((post, i) => (
            // <li key={i} className="list-group-item">{post.universtyName}</li>
            <Card key = { i } style={{ width: "18rem", display: "inline-block" }}>
            <Card.Body>
              <Card.Title> Country : {post.country}</Card.Title>
              <Card.Text>University name : {post.universtyName}</Card.Text>
              <Card.Text><a href={post.universtyUrl}>Web Page : {post.universtyUrl}</a></Card.Text>
              <Button onClick={() => this.deleteFromFav(post._id)}>Delete From Favourite</Button>
              {/* <Button type='submit'>Add To My Fav</Button> */}
            </Card.Body>
          </Card>
          ));
        return (
            <>

                <h1>{posts}</h1>
                {/* <p>test: {this.state.favData[0].universtyName}</p> */}
                {/* <button onClick={this.addFav}>Add fav</button> */}
            </>
        )
    }
}

export default withAuth0(Favourit);
