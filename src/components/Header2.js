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

                    <Form onSubmit={this.props.getUniversity}>

                      <Form.Group className="mb-3" >
                        <Form.Label >Country Name</Form.Label>
                        <Form.Control type="text" placeholder="Jordan" name="city" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Search
                      </Button>
                    </Form>
                    
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

// export const Header2 = (props) => {
//   getUniversity=(event)=>{
//     event.preventDefault();
//     let country = event.target.city.value;
//     console.log(country);

//       }
//   return (
//     <header id='header'>
//       <div className='intro'>
//         <div className='overlay'>
//           <div className='container'>
//             <div className='row'>
//               <div className='col-md-8 col-md-offset-2 intro-text'>

//                 <Form onSubmit={this.props.getUniversity}>

//                   <Form.Group className="mb-3" >
//                     <Form.Label >Country Name</Form.Label>
//                     <Form.Control type="text" placeholder="Jordan" name="city" />
//                   </Form.Group>
//                   <Button variant="primary" type="submit">
//                     Search
//                   </Button>
//                 </Form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>

//   )
// }

// export default Header2;



