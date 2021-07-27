import React, { Fragment } from 'react';
import Menu from './components/Menu';
import ProductList from './pages/ProductList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './pages/Cart';
import Page404 from './pages/Page404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
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
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
