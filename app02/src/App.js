import React,{useState} from 'react';
import './App.css';

function App() {
  // 주석문
  let name = '홍길동';
  const [ename,setEname] = useState('유관순');
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [a,setA] = useState('');
  //let ename = "";

  const btn = () => {
    alert("함수버튼 클릭");
    name = "이순신";
    console.log(name);
    //react useState 사용
    setEname('신사임당');
    //document.getElementById("d01").innerText = name; //자바스크립트,ajax데이터값을 넣는 방법
  }

  const loginBtn = () => {
    alert("로그인을 진행합니다.");
  }

  const pwBtn = (e) => {
    console.log("pw inputbox에 글을 입력합니다.");
    //enter키가 들어오면 로그인버튼을 클릭하도록 구현
    if(e.keyCode == 13){
      loginBtn();
    }
  }


  return (
   <div className='main'>
     <h2>게시판</h2>
     <div id="d01">{name}</div>
     <div >{ename}</div>
     <br/>
     <input type='text' name='id' className='id' 
     onChange={(event)=>setId(event.target.value)} 
     value={id}  placeholder='아이디를 입력하세요.' />
     <br/>
     <input type='text' name='pw' className='pw' 
     onChange={(event)=>setPw(event.target.value)}
     onKeyUp={pwBtn} placeholder='패스워드를 입력하세요.' />
     <br/>
     <button onClick={loginBtn}>로그인</button>
     <br/>
     {/* 자바스크립트 : onclick, react:onClick */}
     <button onClick={btn}>변경</button>




     {/*return문 안에서 주석문 */}
     {/* if문은 사용할수 없음. 삼항식 사용 */}
     {/* <div>{name=='홍길동'?(<h3>홍길동입니다.</h3>):(<h3>홍길동이 아닙니다.</h3>)}</div> */}

   </div>
  );
}

export default App;
