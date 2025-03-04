import React from "react";
import { Link } from "react-router-dom";

const View = () => {
  return(
    <>
      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/memList" className="btn btn-primary">회원리스트</Link>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default View;