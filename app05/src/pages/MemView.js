import React,{useEffect, useState} from "react";
import axios from "axios";
import Nav from '../components/Nav';
import View from "../components/View";
import { useParams } from "react-router-dom"; //parameter값을 받음.


const MemView = () =>{

  const [user,setUser] = useState([]);
  const params = useParams(); //parameter값을 변수로 저장
  console.log("useParams id : "+params.id);
  
  //서버와 통신해서 데이터 가져오기
  //스프링에 있는 url주소를 입력
  useEffect(
    () => {
      axios.get(`http://localhost:8181/member/memberView?id=${params.id}`)
      .then(
        response =>{
          console.log(response);
          setUser(response.data);
        }
      )

    },[]
  )
  
  return (
    <>
      <Nav/>
      <div className="main">
        <h2>회원상세보기</h2>
        <div>
          <View user={user}/>
        </div>
      </div>
    
    </>
  )

}

export default MemView;