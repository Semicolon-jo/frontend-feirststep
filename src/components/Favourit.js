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
            note: '',
            display: false
        }

    }

    //------- used to render the favourit list on page Favourit and update the Data in note --------
    componentDidMount = async () => {
        this.getFav();
        // http://localhost:3001/AddNote
        console.log('hello');
        const { user } = this.props.auth0;
        let noteInfo = {
            email: user.email,
            note: this.state.note
        };
        console.log('noteInfo ', noteInfo);
        //   console.log('note:',this.state.note);
        let noteData = await axios.post(`http://localhost:3001/AddNote`, noteInfo);
        console.log(noteData.data[0].note);
        await this.setState({
            note: noteData.data[0].note
        });
    }

    //------ function to get favourite data to the Favourit page ---------------------
    getFav = async () => {
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


    // http://localhost:3000/deleteBook/${universityId}?email=${email}
    // ------- To delet data from Favourit page -----------
    deleteFromFav = async (universityId) => {
        const { user } = this.props.auth0;
        console.log('uni ID', universityId);
        let FavouriteData = await axios.delete(`http://localhost:3001/delete/${universityId}?email=${user.email}`);
        await this.setState({
            FavData: FavouriteData.data
        })
        this.getFav();
    }


    //---------- to show the form first and edit on txt ------------------

    UpdateNote = async (e) => {
        await this.setState({
            display: true,
        });

    }
    //  '/ubdateBook/:bookID'
    updatenoteHandler = async (e) => {
        e.preventDefault();
        const { user } = this.props.auth0;
        let newnote = e.target.notetxt.value
        let updatedData = {
            email: user.email,
            note: newnote
        }
        let noteData = await axios.put(`http://localhost:3001/updateNote`, updatedData);
        console.log('noteData', noteData.data[0].note);
        await this.setState({
            note: noteData.data[0].note,
            display: false,
        })
    }



    render() {
        const posts = this.state.favData?.map((post, i) => (
            // <li key={i} className="list-group-item">{post.universtyName}</li>
            <Card key = { i }  style={{ width: "18rem", display: "block", margin: "10px" }}>
            <Card.Body style={{ boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)" , borderRadius:" 5px", borderStyle: "groove", width: "800px", height: "122px" }}>
              <Card.Title style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}> Country : {post.country}</Card.Title>
              <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}>University name : {post.universtyName}</Card.Text>
              <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "15px" }}><a href={post.universtyUrl}>visit website</a></Card.Text>
              <Button style={{ position: "relative", left: "657px", bottom: "43px",backgroundColor:"#FF4949" }} onClick={() => this.deleteFromFav(post._id)}>Delete</Button>
              {/* <Button type='submit'>Add To My Fav</Button> */}
            </Card.Body>
          </Card>
        
          ));

        return (
            <>

                <h1>{posts}</h1>
                <div>

          <div id="footer1">
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
