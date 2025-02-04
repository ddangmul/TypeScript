// [기본형 타입 Primitives]
// number, string, boolean, [null, undefined, symbol]
// arrays, objects
// Function types, parameters

// 변수명 뒤에 콜론 + 자료형 표기
// 자료형은 소문자로 시작. 대문자로 시작하면 자바스크립트 객체를 가리킴

let age: number;

age = 12;
age = 12.3;

let useName: string;

useName = "Max";

let isInstructor: boolean;

isInstructor = true;

// 문자열 배열
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// 객체 타입(구조)
// any : 타입스크립트는 특별 구성이 없어도 작동. 기본적으로 변수를 any 타입으로 간주. any는 알려줄 게 없다는 뜻이므로 어떤 유형도 허용. 단, 예비적으로 사용되는 타입이므로 지양하는 게 좋음
// 객체 타입은 중괄호{}로 지정
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmplyee: true, // error
// };

// 객체 + 배열 타입
let people: {
  name: string;
  age: number;
}[];

people = [person, { name: "sue", age: 29 }];
