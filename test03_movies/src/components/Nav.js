import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

const Nav = () =>{
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NAVER</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/mlist" >영화정보리스트</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/minsert">영화정보추가</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mupdate">영화정보수정</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mview">영화상세보기</Link>
              </li>
              
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 sinput " type="search" placeholder="영화검색" aria-label="Search" />
              <button className="btn btn-outline-success sbtn" type="submit">검색</button>
            </form>
          </div>
        </div>
      </nav>
    </>
    
  );
}

export default Nav;