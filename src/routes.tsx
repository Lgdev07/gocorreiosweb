import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FareCalculation from './pages/FareCalculation';
import FareResult from './pages/FareResult';
import Landing from './pages/Landing'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/fare-calculation" component={FareCalculation}/>
      <Route path="/fare-result" component={FareResult}/>
    </BrowserRouter>
  )
}

export default Routes;
