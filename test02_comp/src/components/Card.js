import React, { useState } from 'react';

function Card({btnName,btnName2}){
  const [count,setCount] = useState(0);
  const plusBtn = () => {
    setCount(count+1);
    console.log(count);
  }
  const bName = btnName?btnName:"수정";
  const bName2 = btnName2?btnName2:"삭제";
  // const bName = props.btnName?props.btnName:"수정";
  // const bName2 = props.btnName2?props.btnName2:"삭제";

  return(
    <div>
      <div className="card mb-2">
        <h5 className="card-header">영화정보 {count}</h5>
        <div className="card-body">
          <h5 className="card-title">해리포터1</h5>
          <p className="card-text">2025-02-26</p>
          <a onClick={plusBtn} className="btn btn-primary me-2">{bName}</a>
          <a href="#" className="btn btn-primary">{bName2}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;