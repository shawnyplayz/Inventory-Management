// import React, { Component } from 'react'

// export default class AddItem extends Component {
//   render() {
//     return (
//       <div>Add</ div>
//     )
//   }
// }

import axios from "axios";
import React, { useState, useRef } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../AddItem/AddItem.css";
import Swal from "sweetalert2";
function AddItem() {
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);
  const [price, setPrice] = useState(null);
  const [vendorName, setVendorName] = useState(null);
  const [date, setDate] = useState(0);
  const FirstName = useRef(null);
  const SecondName = useRef(null)
  const Price = useRef(null)
  const Vendor = useRef(null)
  const Date = useRef(null)
  console.log('FirstName :>> ', FirstName.current);

  const adding = async () => {
    let resp;
    console.log("name1 :>> ", setName1);
    let asd = {
      name1: name1,
      name2: name2,
      price: price,
      vendorName: vendorName,
      date: date,
    };
    const str = JSON.stringify(asd);

    await axios
      .post(`http://localhost:4000/items`, JSON.parse(str))
      .then((response) => {
        debugger;
        if (response.status === 200) {
          resp = response.data;
          // console.log("resp :>> ", resp);
          Swal.fire({
            icon: "success",
            text: "Item added successfully!",
            confirmButtonColor: "grey",
            buton: "Ok",
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              clearDetails()
            }
          })
        }
        else {
          Swal({
            icon: "error",
            text: "Failed to add Item",
            buton: "Ok"
          })
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const clearDetails = () => {
    setName1(null)
    setName2(null)
    setPrice(0)
    setVendorName(null)
    setDate(null)
    debugger
    FirstName.current.focus()
    FirstName.current.value = null;
    SecondName.current.value = null;
    Price.current.value = null;
    Vendor.current.value = null;
    Date.current.value = null;

  }
  return (
    <div>
      <Container className="d-flex justify-content-center align-middle mt-5">
        <Card>
          <Card.Header>
            <h3>Add Items</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <input
                  className="mb-3 form-control"
                  placeholder="Name 1"
                  type='text'
                  value={name1}
                  onChange={(e) => {
                    setName1(e.target.value);
                  }}
                  ref={FirstName}
                ></input>
              </Col>
              <Col sm={12} md={12} lg={12}>
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="Name 2"
                  className="mb-3"
                  value={name2}
                  ref={SecondName}
                  name="name2"
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel> */}
                <input
                  className="mb-3 form-control"
                  placeholder="Name 2"
                  type='text'
                  value={name2}
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                  ref={SecondName}
                ></input>
              </Col>
              <Col sm={12} md={12} lg={12}>
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  ref={Price}
                  className="mb-3"
                  value={price}
                  name="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                >
                  <Form.Control type="number" placeholder="Price" />
                </FloatingLabel> */}
                <input
                  className="mb-3 form-control"
                  placeholder="Price"
                  type='number'
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  ref={Price}
                ></input>
              </Col>
              <Col sm={12} md={12} lg={12}>
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="Vendor Name"
                  className="mb-3"
                  ref={Vendor}
                  value={vendorName}
                  name="vendorName"
                  onChange={(e) => {
                    setVendorName(e.target.value);
                  }}
                >
                  <Form.Control type="name" placeholder="Vendor Name" />
                </FloatingLabel> */}
                <input
                  type='text'
                  className="mb-3 form-control"
                  placeholder="Vendor Name"
                  value={vendorName}
                  onChange={(e) => {
                    setVendorName(e.target.value);
                  }}
                  ref={Vendor}
                ></input>
              </Col>
              <Col sm={12} md={12} lg={12}>
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="Date"
                  className="mb-3"
                  ref={Date}
                  value={date}
                  name="Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                >
                  <Form.Control type="date" placeholder="Date" />
                </FloatingLabel> */}
                <input
                  type="date"
                  className="mb-3 form-control"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  ref={Date}
                ></input>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <ButtonToolbar
              aria-label="Toolbar with buttons"
              className="my-2 justify-content-evenly"
            >
              <ButtonGroup aria-label="Third group">
                <Button
                  className="btn-width btn-color-right h-100"
                  onClick={adding}

                >
                  {"Submit"}
                </Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button
                  className="rounded realbtn-width btn-color-right h-100"
                  size="md"
                  onClick={clearDetails}
                >
                  {"Clear"}
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default AddItem;
