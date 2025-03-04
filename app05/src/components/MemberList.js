import React from 'react';
import { Link } from 'react-router-dom';

//props : 변수2개 -> {}를 사용해서 props 변수를 구조분해해서 받을수 있음
const MemberList = ({user}) =>{

  return(
     <>
       <div className="card">
          <h5 className="card-header">아이디2 : {user.id}</h5>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/memView/${user.id}`}>{user.name}</Link>
            </h5>
            <p className="card-text">{user.email}</p>
            <a href="#" className="btn btn-primary mt">수정</a>
            <a className="btn btn-primary">삭제</a>
          </div>
       </div>
     
     </>
  );
}

export default MemberList;