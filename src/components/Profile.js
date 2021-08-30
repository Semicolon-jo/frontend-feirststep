import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
// import { withAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from "@auth0/auth0-react";
// Auth0Provider
import axios from "axios";

import Button from "react-bootstrap/Button";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tt:{},
    }
  }
  //http://localhost:3001/Adduniversity&email=email  ,universityOb
  addUni = async (e) => {
    // e.preventDefault();
    console.log(e,'form');
    const {user}  = this.props.auth0;
    // console.log(this.props.auth0.user.email);
   

    setTimeout((data)=>{
      let uniData = {
        email: user.email,
        universtyName: e.universtyName,
        universtyUrl: e.universtyUrl,
        country: e.country,
      };
      console.log(uniData,'uniData');
     axios.post(`http://localhost:3001/Adduniversity`, uniData);
      }, 5000)

    

    // let uniData = {
    //   // email: user.email,
    //   universtyName: this.props.UniversityData.universtyName,
    //   universtyUrl: this.props.UniversityData.universtyUrl,
    //   country: this.props.UniversityData.country,
    // };
    
    
  };
  componentDidUpdate() {
    // console.log(this.props.auth0.user,'update')
    // console.log(this.props.auth0.user.email, "update")
  }
  render() {
    return (
      <>
      {console.log(this.props.auth0.user,'sss')}
      {  setTimeout(()=>{ console.log(this.props.auth0.user.email,'rrr') }, 5000) }
        {this.props.show && (
          <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Img
              variant="top"
              src={this.props.countryData.flagUrl}
              style={{ width: "200px" }}
            />
            <Card.Body>
              <Card.Title>
                {" "}
                Country : {this.props.countryData.countryName}
              </Card.Title>
              <Card.Text>capital : {this.props.countryData.capital}</Card.Text>
              <Card.Text>
                language : {this.props.countryData.language}
              </Card.Text>
              <Card.Text>
                time Zone : {this.props.countryData.timeZone}
              </Card.Text>
              <Card.Text>
                currencies : {this.props.countryData.currencies}
              </Card.Text>
            </Card.Body>
          </Card>
        )}

        {this.props.UniversityData.map((item, key) => {
          key = { key };
          return (
            <Card style={{ width: "18rem", display: "inline-block" }}>
              <Card.Body>
                <Card.Title> Country : {item.country}</Card.Title>
                <Card.Text>University name : {item.universtyName}</Card.Text>
                <Card.Text>Web Page : {item.universtyUrl}</Card.Text>
                <Button onClick={()=> this.addUni(item) }>Add To My Fav</Button>
                {/* <Button type='submit'>Add To My Fav</Button> */}
              </Card.Body>
            </Card>
            //()=>{this.props.updateCat(this.props.cat._id)}
          );
        })}
        <div>
          <h1> Hello from Profile Component</h1>
          <div id="footer">
            <div className="container text-center">
              <p>
                &copy; 2021 FIRSTSTEP{" "}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth0(Profile);
