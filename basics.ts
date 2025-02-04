// [기본형 타입 Primitives]
// number, string, boolean, [null, undefined, symbol]
// arrays, objects
// Function types, parameters

// 변수명 뒤에 콜론 + 자료형 표기
// 자료형은 소문자로 시작. 대문자로 시작하면 자바스크립트 객체를 가리킴

let age: number;

age = 12;
age = 12.3;

let useName: string | string[];

useName = "Max";
useName = ["a", "b"];

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

// [타입 추론] 타입스크립트의 핵심 기능
// 타입스크립트는 명시적인 타입 표시가 없어도 기본적으로 가능한 많은 타입을 유추하려고 함
// -> 개발자가 작성할 코드 감소하기 때문에, 가능한 타입 추론 사용을 권장
// let course = "React - The Complete Guide"; // 여기서 변수의 타입을 string으로 유추

// course = 12341;  // error! 타입 추론 때문

// [union 타입] 변수에 여러 타입을 지정
// '|'로 타입 구분
// 값과 타입을 유연하게 정의
let course: string | number = "React - The Complete Guide";

course = 1234;
