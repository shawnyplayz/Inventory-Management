import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import "./Main.css"

export default class Main extends Component {

  render() {
    return (
      <div className="bgImg">
        <div className='main_container'>
          <Suspense fallback="loading">
            <Router basename='/InventoryManagement'>
              <Switch>
                <Route exact path="/" >
                  <Dashboard />
                </Route>
                <Route exact path="/InventoryManagement" >
                  <Dashboard />
                </Route>
                <Route path="/Home" >
                  <Dashboard />
                </Route>
                <Route path="/addInventory" >
                  <Dashboard />
                </Route>
              </Switch >
            </Router >
          </Suspense >
        </div >
      </div>

    )
  }
}
// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Main);