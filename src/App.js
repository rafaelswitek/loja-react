import Menu from './components/Menu';
import ProductList from './pages/ProductList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Menu />
          <Switch>
            <Route exact path='/'>
              <ProductList />
            </Route>
            <Route path='/carrinho'>
              <Cart />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
