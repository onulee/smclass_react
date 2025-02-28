import React, { useState,useRef, useEffect } from "react";


const Form = ({addMovie,uData,temp,setTemp,updateMovie}) =>{

  const [count,setCount] = useState(4);
  const [no,setNo] = useState(0);
  const[title,setTitle] = useState("");
  const[date,setDate] = useState("");
  const titleRef = useRef();


  useEffect(
    () => {
      if(!temp){
        console.log(uData);
        console.log("uData title : "+uData[0].title);
        setNo(uData[0].no);
        setTitle(uData[0].title);
        setDate(uData[0].date);
        
      }
    },[uData]
  )

  //데이터 초기화함수
  const resetData = () =>{
    setTitle("");
    setDate("");

  }

  //날짜inputbox : enter키 확인
  const dateEnter = (e) =>{
    if(e.keyCode == 13)  saveBtn();
  }

  //취소
  const cancelBtn = () =>{
    alert("취소버튼");
    resetData();
    setTemp(!temp);
    console.log("temp : "+temp);
  }
  const updateBtn = () => {
    alert(uData[0].no+"번 데이터를 수정합니다.")
    console.log("번호 : "+uData[0].no);
    console.log("제목 : "+title);
    console.log("날짜 : "+date);
    updateMovie({no:uData[0].no,title:title,date:date})
    setTemp(!temp);
    resetData();
  }
  
  //데이터 저장
  const saveBtn = () => {
    if(date.length<1 || title.length<1){ alert("데이터를 입력하셔야 합니다.");
      titleRef.current.focus(); //포커스 
      return; 
    }

    alert("영화정보를 저장합니다.");
    console.log("no : "+count);
    console.log("타이틀 : "+title);
    console.log("날짜 : "+date)
    console.log({no:count,title:title,date:date});
    addMovie({no:count,title:title,date:date});
    setCount(count + 1);

    //inputbox 초기화
    resetData();
    titleRef.current.focus(); //포커스
  }

  return (
    <>
      {
      
      temp?(
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">영화제목</label>
          <input type="text" ref={titleRef}  value={title} onChange={(e)=>setTitle(e.target.value)}
          className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">날짜</label>
          <input type="text"  value={date} onChange={(e)=>setDate(e.target.value)}
          onKeyUp={dateEnter}
          className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="button" onClick={saveBtn} className="btn btn-primary">저장</button>
      </form>
      ):(
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">영화제목</label>
          <input type="text" ref={titleRef}  value={title} onChange={(e)=>setTitle(e.target.value)}
          className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">날짜</label>
          <input type="text"  value={date} onChange={(e)=>setDate(e.target.value)}
          onKeyUp={dateEnter}
          className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="button" onClick={updateBtn} className="btn btn-primary me-2 ">수정</button>
        <button type="button" onClick={cancelBtn} className="btn btn-primary ">취소</button>
      </form>

      )}
      
    </>
  );
}

export default Form;