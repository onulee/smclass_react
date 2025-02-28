import './App.css';
import MovieList from './page/MoveList';
import Home from './page/Home';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <h2>게시판</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/m" element={<MovieList />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
