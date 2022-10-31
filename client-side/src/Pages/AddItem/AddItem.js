// import React, { Component } from 'react'

// export default class AddItem extends Component {
//   render() {
//     return (
//       <div>Add</ div>
//     )
//   }
// }


import React from 'react'
import { Button, ButtonGroup, ButtonToolbar, Card, Col, Container, Form, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../AddItem/AddItem.css'
function addItem() {

  return (
    <div>
      <Container className='d-flex justify-content-center align-middle mt-5'>
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
                >
                  <Form.Control type="text" placeholder="Name 1" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel controlId="floatingInput"
                  label="Name 2"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel controlId="floatingInput"
                  label="Price"
                  className="mb-3"
                >
                  <Form.Control type="number" placeholder="Price" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel controlId="floatingInput"
                  label="Vendor Name"
                  className="mb-3"
                >
                  <Form.Control type="name" placeholder="Vendor Name" />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <FloatingLabel controlId="floatingInput"
                  label="Date"
                  className="mb-3"
                >
                  <Form.Control type="date" placeholder="Date" />
                </FloatingLabel>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <ButtonToolbar aria-label="Toolbar with buttons" className='my-2 justify-content-evenly'>
              <ButtonGroup aria-label="Third group">
                <Button className='btn-width btn-color-right h-100'>{"Submit"}</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button className='rounded realbtn-width btn-color-right h-100' size="md"  >{"Clear"}
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Footer>
        </Card>
      </Container>
    </div >
  )
}

export default addItem