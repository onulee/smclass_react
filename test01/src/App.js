import React,{useState,useEffect} from 'react';
import './App.css';
import Nav from './component/Nav';

function App() {

  
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [txt,setTxt] = useState('');
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  
  useEffect(()=>{
     console.log("useEffect 1 : "+count)
  });
  useEffect(()=>{
     console.log("useEffect 2 : "+count2)
  },[count2]);

  useEffect(()=>{
     console.log("최초 렌더링 ")
  },[]);

  const loginBtn = () => {
    alert("로그인 버튼 클릭");
    setTxt("아이디 : "+id);
  }
  
  const cBtn = () =>{
    setCount(count+1);
  }
  const cBtn2 = () =>{
    setCount2(count2+1);
  }

  return (
    <div className="App">
      <Nav/>
      <div class="cont">
        <div>count1 : {count}</div>
        <button onClick={cBtn}>카운트 증가1</button>
        <div>count2 : {count2}</div>
        <button onClick={cBtn2}>카운트 증가2</button>
        <hr/>
      <div>[ 입력된 글자 ] {txt}</div>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">ID</label>
            <input type="email" value={id} onChange={(e) => setId(e.target.value)}             
            className="form-control id" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={pw} onChange={(e) => setId(e.target.value)} 
            className="form-control pw" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="button" onClick={loginBtn}  className="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default App;
