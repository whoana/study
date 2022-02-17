import Hello from "./Hello";
import './App.css';

function App() {
  const name = 'react'
  const style ={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '2rem',// 기본 단위 px
    padding: '1rem'// 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
      {/* 주석은 화면에 보이지 않아요. */}
       /* 요건 그대로 화면에 보입니다. */
       <Hello //태그 내부에서 주석이 가능합니다. 다만 엔터를 쳐서 태그각 열려 있어야 가능 
       />
       <div style={style}>{name}</div>
       <div className="gray-box"></div>
    </>
  );
}

export default App;
