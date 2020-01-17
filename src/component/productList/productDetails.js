import React, {Fragment, useState } from 'react'
import {
  TableCell,
  TableRow, Input,
  Header, Image, Button } from 'semantic-ui-react'

const ProductDetails = ({imgUrl, productName, productCode, price, total}) => {
  const [quantity, setQuantity] = useState(0);

  const handleChangeQty = (e, {value}) => {
    const qtyValue = value;
    setQuantity(qtyValue)
  }

  const handleAdd =  () => {
    const newQty = quantity < 999 ? quantity + 1 : 999;
    setQuantity(newQty);
  }

  const handleMinus =  () => {
    const newQty = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQty)
  }

  return (
    <Fragment >
        <TableRow >
          <TableCell>
            <figure className="product-desp">
              <Image src={imgUrl} className="product-image"/>
              <div>
                <Header as="h3" className="product-name">{productName}</Header>
                <p className="product-code">{`Product code ${productCode}`}</p>
              </div>
            </figure>
          </TableCell>
          <TableCell>
            <Button
              basic icon="minus" onClick={handleMinus}
              className="calc-button sub"/>
            <Input
              className="product-quantity"
              value={quantity}
              onChange={handleChangeQty}
              type="number"/>
            <Button
              basic icon="add" onClick={handleAdd}
              className="calc-button"/>
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