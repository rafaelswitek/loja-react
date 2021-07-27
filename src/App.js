import React, { Fragment, useEffect, useState } from 'react';
import Menu from './components/Menu';
import ProductList from './pages/ProductList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';
import ValueContext from './context/cart';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log(state)
  });
  return (
    <Fragment>
      <BrowserRouter>
        <ValueContext.Provider value={state.length}>
          <Menu />
        </ValueContext.Provider>
        <ValueContext.Provider value={{ state, setState }}>
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
        </ValueContext.Provider>
      </BrowserRouter>
    </Fragment >
  );
}

export default App;
