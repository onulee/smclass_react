import React from "react";
import { Link } from "react-router-dom";

//react className사용
// Router는 a->Link, href->to
const Nav = () => {
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">HOME</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/memList">회원리스트</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/memWrite">회원정보추가</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/memView">회원상세보기</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav;