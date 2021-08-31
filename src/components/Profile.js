import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
// import { withAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from "@auth0/auth0-react";
// Auth0Provider
import axios from "axios";

import Button from "react-bootstrap/Button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tt: {},
    }
  }
  //http://localhost:3001/Adduniversity&email=email  ,universityOb
  addUni = async (e) => {
    // e.preventDefault();
    console.log('form', e);
    const { user } = this.props.auth0;
    // console.log(this.props.auth0.user.email);
    console.log('user info:', user);
    if (user) {
      setTimeout((data) => {
        let uniData = {
          email: user.email,
          universtyName: e.universtyName,
          universtyUrl: e.universtyUrl,
          country: e.country,
        };
        console.log(uniData, 'uniData');
        axios.post(`http://localhost:3001/Adduniversity`, uniData);
      }, 5000)
    }

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


        {this.props.UniversityData.map((item, key) => {

          return (
            <Card key={key} style={{ width: "18rem", display: "block", margin: "10px" }}>
              <Card.Body style={{ boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)" , borderRadius:" 5px", borderStyle: "groove", width: "650px", height: "122px" }}>
                <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "28px" }} >{item.universtyName}</Card.Text>
                <Card.Text style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "18px" }} ><a href={item.universtyUrl}>visit website </a></Card.Text>
                <Button style={{ position: "relative", left: "461px", bottom: "40px" }} onClick={() => this.addUni(item)}>Add To My Fav</Button>
                {/* <Button type='submit'>Add To My Fav</Button> */}
              </Card.Body>
            </Card>
            //()=>{this.props.updateCat(this.props.cat._id)}
          );
        })}
        {/* {console.log(this.props.auth0.user, 'sss')} */}
        {/* { setTimeout(() => { console.log(this.props.auth0.user.email, 'rrr') }, 5000)} */}
        {this.props.show && (
          <Card style={{ width: "50rem", position: "absolute", left: "1052px", bottom: "-466px" }}>
            
            <Card.Img
              variant="top"
              src={this.props.countryData.flagUrl}
              style={{ width: "296px" }}
            />
            <Card.Title style={{ fontSize: "30px" }} >
                {" "}
                {this.props.countryData.countryName.toUpperCase()}
              </Card.Title>
            <Card.Body style={{ fontSize: "30px" }} >
              
              <Card.Text style={{ fontSize: "30px" }} >CAPITAL: {this.props.countryData.capital}</Card.Text>
              <Card.Text style={{ fontSize: "30px" }} >
                LANGUAGE: {this.props.countryData.language}
              </Card.Text>
              <Card.Text style={{ fontSize: "30px" }} >
                TIME ZONE: {this.props.countryData.timeZone}
              </Card.Text>
              <Card.Text style={{ fontSize: "30px" }} >
                CURRENCIES: {this.props.countryData.currencies}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
        <div>
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
