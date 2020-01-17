import React from 'react'
import { Header, Button } from 'semantic-ui-react'

const SummaryDisplay = () => {
  return (
    <div className="summ-container">
        <Header as="h1">Order Summary</Header>
        <Button className="checkout-button">Checkout</Button>
    </div>
  )
}


export default SummaryDisplay;