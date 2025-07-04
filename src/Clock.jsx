import { useEffect, useState } from "react";

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/



function Clock() {
  const [timerBtn, setTimerBtn] = useState(false);
  const [time, setTime] = useState("");
  const [startTimer, setStartTimer] = useState(0)
  const [pause, setPause] = useState(0);
  let options = {hour: "numeric", minute: "numeric", second: "numeric",hour12: false}
  useEffect(() => {

    const timerId = setInterval(()=>{
      setTime(new Date().toLocaleTimeString("ko-KR",options))
      setStartTimer(timerId);
      console.log(timerId);
    },1000)

    return() =>{
      console.log("hello")
      clearInterval(timerId)
    }
  }, [pause])


  return (
  <div className="timer-container">
    <h1>RealTime Clock</h1>
    <p>{time}</p>
    <button className={"timer-btn"+(timerBtn?"":" active")}
    onClick={()=>{
    
      setTimerBtn(timerBtn?false:true);
      if(!timerBtn){
        clearInterval(startTimer);
      }else if(timerBtn){
        setPause(time);
        setInterval(startTimer);
      }
    }}>
      {timerBtn?"타이머 시작":"타이머 정지"}
    </button>
  </div>);
}

export default Clock;
