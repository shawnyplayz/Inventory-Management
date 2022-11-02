import React, { Component, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import moment from "moment";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capturedData: null,
    };
    this.firstCall = this.firstCall.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortbyVendorName = this.sortbyVendorName.bind(this);
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
    console.log("capturedData :>> ", this.state.capturedData);
  }
  async sortByDate() {
    let temp;
    await axios.get(`http://localhost:4000/items/date`).then(function (response) {
      temp = response.data;
    });
    this.setState({
      capturedData: temp,
    });
  }
  async sortbyVendorName() {
    let temp;
    await axios.get(`http://localhost:4000/items/vendorName`).then(function (response) {
      temp = response.data;
    });
    debugger
    this.setState({
      capturedData: temp,
    });
  }
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card>
            <Card.Header>
              <Row>
                <Col md={6}>
                  <h3>Inventory Items</h3>
                </Col>
                <Col md={3}>
                  <Button onClick={this.sortByDate} className="btn btn-secondary">
                    <h6>Sort By Date</h6>
                  </Button>
                </Col>
                <Col md={3}>
                  <Button onClick={this.sortbyVendorName} className="btn btn-secondary">
                    <h6>Sort By Vendor Name</h6>
                  </Button>
                </Col>
              </Row>





            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive="lg">
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
                  {this.state.capturedData == undefined ? (
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
                  ) : (
                    this.state.capturedData.map((el, index) => {
                      debugger;
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{el.name1}</td>
                          <td>{el.name2}</td>
                          <td>{el.price}</td>
                          <td>{el.vendorName}</td>
                          <td>{moment(el.date).format("MM-DD-YYYY")}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
