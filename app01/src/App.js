import './App.css';
import './css/style.css'; //주석: css파일 import

function App() {
  const css01 = {
    textAlign:'center',
    
  }

  return (
    <div>
      <h2>로그인</h2>
      <div style={css01} className="d01">aaa</div>
      <button>확인</button>
    </div>
  );
}

export default App;
