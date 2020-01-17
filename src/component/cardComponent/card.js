import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import ProductList from '../productList';
import Summary from '../summarySection'

const CardDisplay = () => {
  return (
    <Fragment>
      <Segment className="card-segment">
        <ProductList />
        <Summary />
      </Segment>
    </Fragment>
  )
}


export default CardDisplay;