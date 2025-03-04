import React,{useState} from "react";
import Nav from '../components/Nav';
import event from '../images/1_2.jpg';

const Home = () =>{

  return (
    <>
      <Nav/>
      <div className="main">
        <h2>메인페이지</h2>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/1_1.jpg`}/>
        </div>
        <br/>
        <div>
          <img src={event}/>
        </div>
      </div>
    
    </>
  )

}

export default Home;