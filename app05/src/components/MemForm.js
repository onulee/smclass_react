import React,{useState} from "react";

const MemForm = ({addUser}) =>{
  //#{id},#{pw},#{name},#{phone},#{gender},#{hobby}
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [gender,setGender] = useState('');
  const [hobby,setHobby] = useState('');

  const saveBtn = () => {
    alert("회원정보를 저장합니다.");
    console.log("아이디 : "+id);
    console.log("비밀번호 : "+pw);
    console.log("이름 : "+name);
    console.log("전화번호 : "+phone);
    console.log("성별 : "+gender);
    console.log("취미 : "+hobby);
    //회원정보 저장    
    addUser({id:id,pw:pw,name:name,phone:phone,gender:gender,hobby:hobby})
    resetData(); //데이터 지우기
  }

  //input 화면 지우기
  const resetData = () =>{
    setId("");
    setPw("");
    setName("");
    setPhone("");
    setGender("");
    setHobby("");
  }


  return (
     <>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">아이디</label>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">비밀번호</label>
            <input type="text" value={pw} onChange={(e)=>setPw(e.target.value)}
            className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">이름</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">전화번호</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">성별</label>
            <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">취미</label>
            <input type="text" value={hobby} onChange={(e)=>setHobby(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          {/*
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="남자"/>
            <label class="form-check-label" for="inlineRadio1">남자</label>
          </div>
           <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="여자"/>
            <label class="form-check-label" for="inlineRadio2">여자</label>
          </div> */}
          
          <button type="button" onClick={saveBtn} className="btn btn-primary w-100">정보저장</button>
        </form>
     </>
  );
}

export default MemForm;