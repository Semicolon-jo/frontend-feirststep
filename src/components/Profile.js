import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class Profile extends React.Component {


  render() {
    return (
      <>
      
        {this.props.show && 
        <Card style={{ width: '18rem', display:'inline-block'}}>
        <Card.Img variant="top" src={this.props.countryData.flagUrl} style={{ width:'200px' }} />
        <Card.Body>
          <Card.Title> Country : {this.props.countryData.countryName}</Card.Title>
          <Card.Text>
          capital : {this.props.countryData.capital}
          </Card.Text>
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
  }
       
        {
          this.props.UniversityData.map((item,key) => {
            key = {key}
            return (
              
              <Card style={{ width: '18rem', display:'inline-block'}}>
        <Card.Body>
          <Card.Title> Country : {item.country}</Card.Title>
          <Card.Text>
          University name : {item.universtyName}
          </Card.Text>
          <Card.Text>
          Web Page : {item.universtyUrl}
          </Card.Text>
       
        </Card.Body>
      </Card>
            )
          })
        }
        
        
        <div>
          <h1> Hello from Profile Component</h1>
          <div id='footer'>
            <div className='container text-center'>
              <p>
                &copy; 2021 FIRSTSTEP
                {' '}
                <a href='http://www.templatewire.com' rel='nofollow'>

                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Profile;
