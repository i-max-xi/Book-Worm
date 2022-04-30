import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Components/Books";
import Categories from "./Components/Categories";


class App extends React.Component {
  render() { 
    return (
      <Router>
        <Routes>
          <Route path='/books' element ={Books} />
          <Route path='/categories' element= {Categories} />
        </Routes>
      </Router>
    );
  }
}
 
export default App;