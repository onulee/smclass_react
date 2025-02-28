import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
const MovieList = () => {
  return (
    <>
      <h2>MovieList</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default MovieList;