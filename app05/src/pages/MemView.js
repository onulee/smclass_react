import React,{useEffect, useState} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import View from "../components/View";

const MemView = () =>{

  const [movies,setMovies] = useState(
    [
      {no:3,title:"해리포터 3",date:"2022-01-01"},
      {no:2,title:"해리포터 2",date:"2021-01-01"},
      {no:1,title:"해리포터 1",date:"2020-01-01"},
    ]
  );
  
  




  return (
    <>
      <Nav/>
      <div className="main">
        <h2>영화상세보기</h2>
        <div>
          <View/>
        </div>
      </div>
    
    </>
  )

}

export default MemView;