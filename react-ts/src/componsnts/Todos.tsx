import React from "react";

// FC = FunctionComponent : @types/react 패키지에 정의된 제네릭 타입.
// Todos가 함수형 컴포넌트로 동작함을 명시
// 홀화살표 <{}> : 제네릭 타입을 만드는 구문
// React.FC는 이미 내부에서 홀화살괄호로 사용해 정의된 제네릭 타입이다.
// 여기에 또 <{}>를 사용하는 것은 제네릭 타입을 만드는 게 아니라,
// 내부적으로 사용되는 제네릭 타입에 '구체적인 값'을 집어넣는 것이다.
// 구현하려는 코드가 타입스크립트의 타입추론을 허용할 수 없기 때문에 이렇게 사용
// 함수를 정의하고 '타입스크립트에게 이 함수를 내부적으로 어떻게 처리해야 하는지 알려주는 것'이 목적
// ex-모든 함수형 컴포넌트가 갖는 children같은 속성을 일반 props와 합치는 등
// => Todos함수는 FC 타입 제네릭 함수이고, 이 함수에 집어넣을 값은 이 함수형 컴포넌트에 맞게 props를 정의한 객체.
// 개별 함수마다 props에 대한 정의가 다르기 때문에 이렇게 함
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
