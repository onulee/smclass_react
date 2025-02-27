import React from 'react';

const Nav = () => {
     return(
     <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NAVER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">회원가입</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">게시판리스트</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  회원정보
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">회원정보</a></li>
                  <li><a className="dropdown-item" href="#">쿠폰정보</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">로그아웃</a></li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success w-100" type="submit">검색</button>
            </form>
          </div>
        </div>
      </nav>
     </>
     )
}

export default Nav;
