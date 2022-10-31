// import React, { Component } from 'react'

// export default class AddItem extends Component {
//   render() {
//     return (
//       <div>Add</ div>
//     )
//   }
// }

import axios from "axios";
import React, { useState } from "react";
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
function AddItem() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [price, setPrice] = useState(0);
  const [vendorName, setVendorName] = useState("");
  const [date, setDate] = useState(null);

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
        resp = response.data;
        console.log("resp :>> ", resp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name 1"
                  className="mb-3"
                  value={name1}
                  name="name1"
                  onChange={(e) => {
                    setName1(e.target.value);
                  }}
                >
                  <Form.Control type="text" placeholder="Name 1" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name 2"
                  className="mb-3"
                  value={name2}
                  name="name2"
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3"
                  value={price}
                  name="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                >
                  <Form.Control type="number" placeholder="Price" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Vendor Name"
                  className="mb-3"
                  value={vendorName}
                  name="vendorName"
                  onChange={(e) => {
                    setVendorName(e.target.value);
                  }}
                >
                  <Form.Control type="name" placeholder="Vendor Name" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Date"
                  className="mb-3"
                  value={date}
                  name="Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                >
                  <Form.Control type="date" placeholder="Date" />
                </FloatingLabel>
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
