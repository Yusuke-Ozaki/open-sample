import {BrowserRouter,Link,Switch,Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {Menu} from"./menu/menu"
import {GoodsCreatePage} from"./goods/goods_create/GoodsCreatePage"
import {GoodsListPage} from"./goods/goods_list/GoodsListPage"
import { GoodsDetailsPage } from "./goods/goods_details/GoodsDetailsPage";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Switch>
          <Route exact path="/goods/list" component={GoodsListPage}/>
          <Route exact path="/goods/create" component={GoodsCreatePage}/>
          <Route  path="/detailsPage/" component={GoodsDetailsPage}/>
          {/* <Route exact path="/goods/update" component={GoodsUpdatePage}/> */}
          <Route exact path="/" component={Menu}/>
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
