import React, { useState } from 'react';

const Card = ({movie,delMovie,updatePage}) => {

  
  

  return(
      <div className="card mb-2" key={movie.no}>
        <h5 className="card-header">영화정보 {movie.no} </h5>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a onClick={()=>updatePage(movie.no)} className="btn btn-primary me-2">수정</a>
          <a onClick={()=>delMovie(movie.no)} className="btn btn-primary">삭제</a>
        </div>
      </div>
  );
}

export default Card;