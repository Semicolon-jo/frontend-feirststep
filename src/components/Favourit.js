import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
const axios = require('axios');
class Favourit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            note:'my note go her',
            display:false
        }

    }

    componentDidMount = () => {
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
                let Data = favouriteData.data;
                this.setState({
                    favData: Data
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
    deleteFromFav = async (universityId) => {
        const { user } = this.props.auth0;
        console.log('uni ID', universityId);
        let FavouriteData = await axios.delete(`http://localhost:3001/delete/${universityId}?email=${user.email}`);
        await this.setState({
            FavData: FavouriteData.data
        })
        this.addFav();
    }
    // http://localhost:3001/AddNote?email=.....@
   UpdateNote = async (noteInf) => { 
    await this.setState({
      display: true,
      note :noteInf,
    });
    
  }
  //  '/ubdateBook/:bookID'
  updatenoteHandler = async (e) => {
      e.preventDefault();
let newnote = e.target.notetxt.value
    this.setState({
      note: newnote,
      display: false,
    })
  }



    render() {
        const posts = this.state.favData?.map((post, i) => (
            // <li key={i} className="list-group-item">{post.universtyName}</li>
            <Card key={i} style={{ width: "18rem", display: "block", margin: "10px" }}>
                <Card.Body style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: " 5px", borderStyle: "groove", width: "800px", height: "122px" }}>
                    <Card.Title style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}> Country : {post.country}</Card.Title>
                    <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}>University name : {post.universtyName}</Card.Text>
                    <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}><a href={post.universtyUrl}>visit website</a></Card.Text>
                    <Button style={{ position: "relative", left: "590px", bottom: "40px" }} onClick={() => this.deleteFromFav(post._id)}>Delete From Favourite</Button>
                    {/* <Button type='submit'>Add To My Fav</Button> */}
                </Card.Body>
            </Card>
        
          ));
        return (
            <>

                <h1>{posts}</h1>
                <div>
                <Card style={{ width: "18rem", display: "block", margin: "10px" }}>
                <Card.Body style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: " 5px", borderStyle: "groove", width: "800px", height: "122px" }}>
                <Card.Title style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}> My Notes</Card.Title>
                    <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}> {this.state.note}</Card.Text>

                    <Button style={{ position: "relative", left: "590px", bottom: "40px" }} onClick={() => this.UpdateNote(this.state.note)}>update My note</Button>

                </Card.Body>
            </Card>
            {this.state.display &&
            <form onSubmit={this.updatenoteHandler}>
                <label>update note</label>
                <input type ="text" name ="notetxt"/>
                <Button type="submit">update </Button>
                {/* <button type="submit">update </button> */}
            </form>
    }
            </div>
                <div>
                    <div id="footer">
                        <div className="container text-center">
                            <p>
                                &copy; 2021 FIRSTSTEP{" "}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <p>test: {this.state.favData[0].universtyName}</p> */}
                {/* <button onClick={this.addFav}>Add fav</button> */}
            </>
        )
    }
}

export default withAuth0(Favourit);
