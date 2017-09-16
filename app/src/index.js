import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import Index from "./components/app";
import PostNew from "./components/post_new";
import SinglePost from "./components/single_post/SinglePost";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={SinglePost} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("main")
);
