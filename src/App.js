import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Components/redux/books/Books";
import Categories from './Components/redux/categories/Categories';
import NavBar from "./pages/NavBar";


class App extends React.Component {
  render() { 
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element ={<Books />} />
          <Route path='/categories' element= {<Categories />} />
        </Routes>
      </Router>
    );
  }
}
 
export default App;