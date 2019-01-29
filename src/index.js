import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from './configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './views/Home';
import Products from './views/Products';
import Categories from './views/Categories';
import Product from './views/Product';
import Cart from './views/Cart';
import Search from './views/Search';

import { withAlert } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import './index.css';

const options = {
  timeout: 5000,
  position: "bottom center"
};

render(
  <Provider store={store} template={AlertTemplate} {...options}>
    <HashRouter>

      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/:categId" component={Products} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/search/:search" component={Search} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
