import React, { Component, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Form, Row, Table, } from 'react-bootstrap';
import moment from 'moment';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      capturedData: null
    }
    this.firstCall = this.firstCall.bind(this)
  }
  componentDidMount() {
    this.firstCall();
  }
  async firstCall() {
    debugger;
    let asd = null;
    await axios
      .get(`http://localhost:4000/items`)
      .then(function (response) {
        asd = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      capturedData: asd,
    });
    console.log('capturedData :>> ', this.state.capturedData);
  }
  render() {
    //     return (
    //       <div>
    //         <Container className='mt-5'>
    //           <Card>
    //             <Card.Header>
    //               <h3>Inventory Items</h3>
    //             </Card.Header>
    //             <Card.Body>
    //               <Table striped bordered hover responsive='lg'>
    //                 <thead>
    //                   <tr>
    //                     <th>{"Item Code"}</th>
    //                     <th>{"Name 1"}</th>
    //                     <th>{"Name 2"}</th>
    //                     <th>{"Price"}</th>
    //                     <th>{"Vendor Name"}</th>
    //                     <th>{"Date"}</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {
    //                     this.state.capturedData === null || this.state.capturedData === undefined ?
    //                       <>
    //                         <tr>
    //                           <th>{"1"}</th>
    //                           <th>{null}</th>
    //                           <th>{null}</th>
    //                           <th>{null}</th>
    //                           <th>{null}</th>
    //                           <th>{null}</th>
    //                         </tr>
    //                       </>
    //                       :
    //                       <>
    //                         <tr>
    //                           <th>{"1"}</th>
    //                           <th>{this.state.capturedData.name1}</th>
    //                           <th>{this.state.capturedData.name2}</th>
    //                           <th>{this.state.capturedData.price}</th>
    //                           <th>{this.state.capturedData.vendorName}</th>
    //                           <th>{this.state.capturedData.date}</th>
    //                         </tr>
    //                       </>
    //                   }

    //                 </tbody>
    //               </Table>
    //             </Card.Body>
    //           </Card>
    //         </Container>
    //       </div >
    //     )
    //   }
    // }
    // import React, { useEffect, useState } from 'react'

    // function Home() {
    //   const [test, setTest] = useState([])
    //   useEffect(() => {
    //     debugger
    //     // axios({
    //     //   method: 'get',
    //     //   url: 'http://localhost:4000/items',
    //     // })
    //     //   .then(function (response) {
    //     //     debugger
    //     //     setData(response.data)
    //     //     console.log('data :>> ', data);
    //     //     // this.setState({
    //     //     //   capturedData: resp
    //     //     // })
    //     //     // console.log('resp :>> ', resp);
    //     //   });
    //     // // this.state.capturedData.push(resp[0])
    //     //   fetch('http://localhost:4000/items')
    //     //     .then((response) => response.json())
    //     //     .then((data) => {
    //     //       setTest(data)
    //     //       console.log(data, 'test data');
    //     //     });

    //     // }, [])

    return (
      <div>
        <Container className='mt-5'>
          <Card>
            <Card.Header>
              <h3>Inventory Items</h3>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive='lg'>
                <thead>
                  <tr>
                    <th>{"Item Code"}</th>
                    <th>{"Name 1"}</th>
                    <th>{"Name 2"}</th>
                    <th>{"Price"}</th>
                    <th>{"Vendor Name"}</th>
                    <th>{"Date"}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.capturedData == undefined ?
                      <>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </>
                      :
                      this.state.capturedData.map((el, index) => {
                        debugger
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{el.name1}</td>
                            <td>{el.name2}</td>
                            <td>{el.price}</td>
                            <td>{el.vendorName}</td>
                            <td>{moment(el.date).format('MM-DD-YYYY')}</td>
                          </tr>

                        )
                      })
                  }
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div >
    )
  }
}