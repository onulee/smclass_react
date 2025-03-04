import React from "react";
import { Link } from "react-router-dom";

const View = ({user}) => {
  return(
    <>
      <div className="card text-center">
        <div className="card-header">
          아이디 : {user.id}
        </div>
        <div className="card-body">
          <h5 className="card-title">이름 : {user.name}</h5>
          <p className="card-text">이메일 : {user.email}</p>
          <Link to="/memList" className="btn btn-primary">회원리스트</Link>
        </div>
        <div className="card-footer text-body-secondary">
          회원정보확인
        </div>
      </div>
    </>
  )
}

export default View;