import React, { useContext } from 'react'
import { Header, Table, TableBody } from 'semantic-ui-react'
import { Context } from '../../services/context'
import ProductDetails from './productDetails';

const ListDisplay = () => {
  const HeaderCell = ['Product details', 'Quantity', 'Price', 'Total'];
  const products = useContext(Context);
  return (
    <div className="product-container">
        <Header as="h1">Shopping cart</Header>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              {HeaderCell.map((eachCell, index) =>
              (<Table.HeaderCell key={index} className="header-title">
                {eachCell}
              </Table.HeaderCell>)
              )}
            </Table.Row>
          </Table.Header>
          <TableBody>
            {products.map((produ, index) =>
              <ProductDetails key={index}
                imgUrl={produ.imgUrl}
                productName={produ.productName}
                productCode={produ.productCode}
                price={produ.price}
                 />)}
          </TableBody>
        </Table>
    </div>
  )
}


export default ListDisplay;