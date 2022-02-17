import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "이름없음",
  };


  //static 키워드가 필요
  //안에서 this를 참조 불가
  //여기서 특정 객체를 반환하게되면 해당 객체 안에 잇는 내용들이 컴포넌트의 state로 설정됨
  //null 반환시 아무일도 하지 않음 
  //컴포넌트가 처음 렌터링되기 전에 호출되고 리렌터링되기 전에도 매번 호출됨.
  //리렌더링 시 호출된다는 말은 props 나 state 가 바뀌었을때도 호출된다는 의미.
//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log("getDerivedStateFromProps");
//     console.log(nextProps);
//     console.log(prevState);
//     return null;
//   }

  //컴포넌트가 렌더링 할지 말지를 결정하는 메서드 
  //React.memo 와 비슷 ?
  //true false 리턴하면 됨 
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true
  }

  //호출되는 시점은 컴포넌트가 화면에 나타난 상태에서 호출됨 
  //여기선 주로 D3, masonry 처럼 DOM을 사용해야하는 외부 라이브러리 연동을 하거나 
  //해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통해 ajax 요청을
  //하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행 
  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }


  render() {
    return (
      <div style={{ color: this.props.color }}>
        {this.props.isSpecial && <b>*</b>}
        안녕하세요 {this.props.name}
      </div>
    );
  }
}

// Hello.defaultProps = {
//     name: '이름없음'
// }

export default Hello;
