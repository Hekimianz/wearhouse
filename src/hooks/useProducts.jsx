import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export default function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error('ProductsContext was used outside of ProductsProvider');
  return context;
}
