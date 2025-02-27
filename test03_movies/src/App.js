import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  //초기화 데이터
  const [movies,setMovies] = useState(
    [
      {no:1,title:'해리포터 1',date:'2020-01-01'},
      {no:2,title:'해리포터 2',date:'2021-01-01'},
      {no:3,title:'해리포터 3',date:'2022-01-01'},
    ]
  ) 
  const [uData,setUData] = useState();
  const [temp,setTemp] = useState(true);

  const updateData = () =>{

  }
 
  //데이터 수정페이지 : 데이터 가져오기
  const updatePage = (no) =>{
    if(!temp){
      alert("취소버튼을 클릭하셔야 합니다.");
      return;
    }
    alert(no+"번 데이터를 수정합니다.");
    setTemp(!true); //수정페이지로 변경
    console.log("데이터 수정번호 : "+no);
    setUData( movies.filter((movie)=>{return(movie.no==no)}) )
  }



  //데이터 삭제
  const delMovie = (no) =>{
     console.log("데이터 삭제번호 : "+no);
     alert("데이터 삭제 : "+no);
     setMovies(movies.filter(
      (movie) => {return(movie.no!=no)}
     ));
  }

  //데이터 추가
  const addMovie = (movie) =>{
    setMovies([...movies,movie,]);
  }

  //데이터출력 : 데이터가 없을때 삼항식 사용
  const cardList = movies.length?movies.map((movie)=>{
    return(
      <Card movie={movie} delMovie={delMovie} updatePage={updatePage} key={movie.no}/>
    )
  }):"데이터가 없습니다.";

  
  return (
    <>
      <h2 className='txt'>게시판</h2>
      <Form addMovie={addMovie} uData={uData} temp={temp} setTemp={setTemp} />
      <div className='cont'>
        {cardList}
      </div>
      
    </>
    
  );
}

export default App;
