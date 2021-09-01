import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import Home from '../Home/Home';
import Product from '../Product/Product';
import Products from '../Products/Products';

const Root = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/:category" component={Products} />
                <Route exact path="/product/:id" component={Product} />
            </Switch>
        </BrowserRouter>
    )
}
export default Root;