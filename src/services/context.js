import React, { createContext } from 'react';
import { products } from './products';
export const Context = createContext();

export const Provider = ({children}) => {
  console.log(products)
  return (<Context.Provider value={products}>{children}</Context.Provider>)
}

export default {
  Context,
  Provider
}