import './App.css';
 // react hook - react 함수 - useState (react 함수 중 하나)
import {useState} from "react"
import Box from "./component/Box"
function App() {
  // react는 state에 반응하기 때문에 이름이 react다.
  // state 값이 변하면 자동으로 ui에도 바뀌게 해준다. (js는 innerHTML로 다시 붙여줘야함)
  let cnt = 0;
  const[cnt2, setCnt2] = useState(0)
  //react 컴포넌트 :: html, js 같이 쓸수 있다.
  // 
  // 1. 유저가 버튼을 클릭한다.
  // 2. cnt+1 해서 1이 된다
  // 3. setState 함수 호출한다.
  // 4. console.log 실행
  // 변수는 1, state는 아직 안변해서 그 전 값이 보인다.
  // 함수 끝
  // app 이 re render
  // let cnt = 0 을 거치면서 cnt는 다시 초기화된다.
  // state값은 업데이트가 되면서 render가 되어 변경 완료된다
  let increase = ()=>{
    cnt += 1;
    setCnt2(cnt2 + 1); // state: 비동기적 - 시간이 걸림, 함수가 끝나야함  
    console.log("카운트", cnt, " 카운트2", cnt2);
  }
  // console.log("카운트", cnt, " 카운트2", cnt2);
  return (
  <div>
    <Box name="리사" num={1}/>
    <Box name="지수" num={2}/>
    <Box name="제니" num={3}/>

    <div>{cnt}</div>
    <div>state:{cnt2}</div>
    <button onClick={increase}>클릭!</button>
  </div>
  );
}

export default App;
