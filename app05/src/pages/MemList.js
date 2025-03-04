import React,{useEffect, useState} from "react";
import Nav from '../components/Nav';
import axios from "axios";
import MemberList from '../components/MemberList';


const MemList = () =>{

  // 스프링에서 데이터를 가져와서 출력
  //json데이터, 배열객체, 일반변수는 새로고침을 해야 화면에 적용이 됨.
  // useState변수는 자동으로 화면에 적용
  // useEffect사용해서 db에서 데이터를 가져와 movies에 저장
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

  

  //데이터 출력(select - get방식)
  // 반복문 map함수는 return해서 값을 돌려줌. for문 반복만 함. return없음.
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성 
  // 삼항식을 사용해서 영화정보 데이터가 없을때 처리
  const members = 
  users.length?
  users.map((user)=>{
    return(
      <MemberList user={user} key={user.id}/>
    );
  }):"영화정보 데이터가 없습니다."
  ;


  return (
    <>
      <Nav/>
      <div className="main">
        <h2>회원정보리스트</h2>
        <div>
          {members}
        </div>
      </div>
    
    </>
  )

}

export default MemList;