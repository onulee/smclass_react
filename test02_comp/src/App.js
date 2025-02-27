import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [temp,setTemp] = useState(false);
  const changeBtn = () =>{
    setTemp(!temp);
  }
  const movies = [
    {no:1,title:'아이언맨 1',year:'2020-01-01'},
    {no:2,title:'아이언맨 2',year:'2021-01-01'},
    {no:3,title:'아이언맨 3',year:'2022-01-01'},
  ]

  const render = temp?"설정되었습니다.":"설정이 해제 되었습니다.";

  return (
    <>
      <h2 className='txt'>게시판</h2>
      <div>{render}</div>
      <button onClick={changeBtn}>내용변경</button>
      <Card btnName="변경" btnName2="제거" />
      <Card btnName="update" btnName2="delete"/>
      <Card/>
    </>
    
  );
}

export default App;
