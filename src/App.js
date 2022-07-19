import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';
import NavBar from './pages/NavBar';
import './App.css';
import ErrorPage from './Components/ErrorPage';

const App = () => {
    return (
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={ErrorPage} />
          </Routes>
      </Router>
    );
}
export default App;
