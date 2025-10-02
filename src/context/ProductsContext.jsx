import { createContext, useCallback, useEffect, useReducer } from 'react';

const ProductsContext = createContext();

const initialState = {
  products: [],
  product: {},
  error: null,
  loading: false,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'allProductsRecieved':
      return { ...state, products: action.payload, loading: false };
    case 'errorRecieved':
      return { ...state, error: action.payload, loading: false };
    case 'productRecieved':
      return { ...state, product: action.payload, loading: false };
    case 'isLoading':
      return { ...state, loading: true };
    case 'addToCart': {
      const existing = state.cart.find((obj) => obj.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case 'increaseQty':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case 'decreaseQty':
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0),
      };
    case 'removeFromCart':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'checkout':
      return { ...state, cart: [] };
    default:
      throw new Error('Unknown action type');
  }
}

export default function ProductsProvider({ children }) {
  const [{ products, product, loading, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numOfCartItems = cart.reduce((acc, curr) => {
    return curr.qty + acc;
  }, 0);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'isLoading' });
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch({ type: 'allProductsRecieved', payload: data });
      } catch (err) {
        dispatch({ type: 'errorRecieved', payload: err.message });
      }
    }
    fetchData();
  }, []);

  const getProduct = useCallback(
    async (id) => {
      dispatch({ type: 'isLoading' });
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        dispatch({ type: 'productRecieved', payload: data });
      } catch (err) {
        dispatch({ type: 'errorRecieved', payload: err.message });
      }
    },
    [dispatch]
  );

  const addToCart = (product) => {
    dispatch({ type: 'addToCart', payload: product });
  };

  const increaseQty = (id) => {
    dispatch({ type: 'increaseQty', payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: 'decreaseQty', payload: id });
  };

  const remove = (id) => {
    dispatch({ type: 'removeFromCart', payload: id });
  };

  const checkout = () => {
    dispatch({ type: 'checkout' });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        loading,
        cart,
        numOfCartItems,
        getProduct,
        addToCart,
        increaseQty,
        decreaseQty,
        remove,
        checkout,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext };
