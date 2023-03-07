import React from "react";
import Header from "./header/Header.js";
import Main from "./main/Main.js";
import Home from './home/Home.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);


class App extends React.Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}


export default App;

