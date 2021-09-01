import React from 'react'
import { Form, Button } from 'react-bootstrap';
const axios = require('axios');


class Header2 extends React.Component {

  render() {
    return (
      <>
       <header id='header'>
          <div className='intro'>
            <div className='overlay'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 col-md-offset-2 intro-text'>
                     <div style={{position:"relative",right:"185px" }}>
                    <Form style={{}} onSubmit={this.props.getUniversity}>

                      <Form.Group className="mb-3" >
                        <Form.Label style={{fontSize: "30px" , color:"#FFFFFF" , padding:"2%",position: "relative", right: "15px"}} ></Form.Label>
                      
                        <Form.Control style={{width:"550px", padding:"2%"}} type="text" placeholder="Put your steps here" name="city" />
                      </Form.Group>
                      <Button style={{borderRadius: "35px",margin:"10px" , padding: "12px 30px", fontSize:"15px",position: "relative", right: "15px", color:"White" }} variant="primary" type="submit">
                        Search
                      </Button>
                    </Form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header2





