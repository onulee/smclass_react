import React,{useState,useEffect} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import MemForm from "../components/MemForm";
import Nav from '../components/Nav';
import axios from "axios";

const MemWrite = () =>{

    const [users,setUsers] = useState([]);

    //서버와 통신해서 데이터 가져오기
    //스프링에 있는 url주소를 입력
    useEffect(
      () => {
        axios.get("http://localhost:8181/member/memberList")
        .then(
          response =>{
            console.log(response);
            setUsers(response.data);
          }
        )

      },[]
    )
    
  
    //데이터 추가(insert - post방식)
    const addUser = (user) =>{
        axios.post("http://localhost:8181/member/memberInsert",
        user  
        )
        .then(
          response =>{
            console.log(response);
            setUsers([response.data,...users,]);
          }
        )
      //setUsers([user,...users,]); // 3개데이터 -> 3개데이터 모두 지우고, 최종데이터만 저장
    }



  return (
    <>
      <Nav/>
      <div className="main">
        <h2>회원정보쓰기</h2>
        <MemForm addUser={addUser}  />
        
      </div>
    
    </>
  )

}

export default MemWrite;