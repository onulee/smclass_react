import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
const Mview = () => {
  return(
    <>
       <h2>영화상세보기</h2>
       <nav>
          <Link to="/mlist">영화정보리스트</Link>
          <br/>
          <Link to="/minsert">영화정보추가</Link>
          <br/>
          <Link to="/mupdate">영화정보수정</Link>
          <br/>
          <Link to="/mview">영화상세보기</Link>
        </nav>
    </>

  )
}

export default Mview;