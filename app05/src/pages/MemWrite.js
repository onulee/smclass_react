import React,{useState} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';

const MemWrite = () =>{

  // 스프링에서 데이터를 가져와서 출력
    //json데이터, 배열객체, 일반변수는 새로고침을 해야 화면에 적용이 됨.
    // useState변수는 자동으로 화면에 적용
    // useEffect사용해서 db에서 데이터를 가져와 movies에 저장
    const [movies,setMovies] = useState(
      [
        {no:3,title:"해리포터 3",date:"2022-01-01"},
        {no:2,title:"해리포터 2",date:"2021-01-01"},
        {no:1,title:"해리포터 1",date:"2020-01-01"},
      ]
    );
  
    //데이터 추가(insert - post방식)
    const addMovie = (movie) =>{
       setMovies([movie,...movies,]); // 3개데이터 -> 3개데이터 모두 지우고, 최종데이터만 저장
    }



  return (
    <>
      <Nav/>
      <div className="main">
        <h2>회원정보쓰기</h2>
        <Form addMovie={addMovie}  />
        
      </div>
    
    </>
  )

}

export default MemWrite;