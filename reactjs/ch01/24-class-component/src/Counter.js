import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }
 
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    console.log(nextProps);
    console.log(prevState);
    return null;
  }

  //컴포넌트에 변화가 일아나가 직전의 DOM 상태를 가져와서 특정값을 반환하면 
  //그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용을 할 수 있습니다.
  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("getSnapshotBeforeUpdate", prevState)
      return prevState
  }

  //파라메터 snapshot 은 위에 getSnapshotBeforeUpdate 으로 부터 넘겨 받는 값 
  //snapshot 은 컴포넌트 업데이트 전 이전 상태값을 마지막으로 찍어 전달한다.
  componentDidUpdate(prevProps, prevState, snapshot){
      console.log("counter componentDidUpdate", prevProps, prevState)
      if(snapshot)
        console.log("before number:" , snapshot)
  }
 
//컴포넌트가 렌더링 할지 말지를 결정하는 메서드 
  //React.memo 와 비슷 ?
  //true false 리턴하면 됨 
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true
  }

  //컴포넌트가 화면에서 사라지기 직전에 호출됩니다.
  //주로 DOM 에 직접 등록한 이벤트 제거나, setTimeout에 대한 clearTimeout
  //외부라이브러리의 dispose 기능 호출등을 작성하는 위치 입니다.
  componentWillUnmount(){
      console.log("componentWillUnmount")
  }

  onIncrease() {
    //this.dispatch({ type: "INCREAMENT" });
    this.setState(beforeState => {
        return {number: beforeState.number + 1} 
    },() => console.log('after increase, the number is:' + this.state.number))
  }

  onDecrease() {
    //this.dispatch({ type: "DECREAMENT" });
    this.setState(beforeState => {
        return {number: beforeState.number - 1} 
    },() => console.log('after decrease, the number is:' + this.state.number))
  }



  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>-1</button>
        <a href='http://wwww.google.com'>www.google.com</a>
      </div>
    );
  }
}

export default Counter;
