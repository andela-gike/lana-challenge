import React, {Fragment } from 'react'
import {
  TableCell,
  TableRow, Input,
  Header, Image, Button } from 'semantic-ui-react'

const ProductDetails = ({imgUrl, productName, productCode, price, total}) => {

  return (
    <Fragment >
        <TableRow >
          <TableCell>
            <figure>
              <Image src={imgUrl}/>
              <div>
                <Header as="h3">{productName}</Header>
                <span>{`Product code ${productCode}`}</span>
              </div>
            </figure>
          </TableCell>
          <TableCell>
            <Button basic icon="minus" />
            <Input />
            <Button basic icon="add"/>
          </TableCell>
          <TableCell>
            <span>{`${price}€`}</span>
          </TableCell>
          <TableCell>
            <span>{`${total}€`}</span>
          </TableCell>
        </TableRow>
    </Fragment>
  )
}


export default ProductDetails;