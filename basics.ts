// [기본형 타입 Primitives]
// number, string, boolean, [null, undefined, symbol]
// arrays, objects
// Function types, parameters

import { isIdentifierStart } from "typescript";

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

// [타입 별칭 생성]
// type은 타입스크립트 내장 키워드
// type 뒤에 원하는 별칭, 등호 다음 원하는 타입 정의
// 자바스크립트로 컴파일하면 코드에서 사라짐
type Person = {
  name: string;
  age: number;
};

// 객체 타입(구조)
// any : 타입스크립트는 특별 구성이 없어도 작동. 기본적으로 변수를 any 타입으로 간주. any는 알려줄 게 없다는 뜻이므로 어떤 유형도 허용. 단, 예비적으로 사용되는 타입이므로 지양하는 게 좋음
// 객체 타입은 중괄호{}로 지정
let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmplyee: true, // error
// };

// 객체 + 배열 타입
let people: Person[];

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

// [Functions & types]
// 함수를 사용할 때 타입은 매개변수와 반환값에 지정할 수 있다. 즉, 반환값의 타입도 생각해야 한다.
function add(a: number, b: number): number | string {
  return a + b; // 함수 타입을 명시하지 않으면 반환값을 number로 타입 추론
}

// - 특별한 반환값 타입 : void
// 함수에 반환값이 없을 때 사용
// null 또는 undefined와 비슷하지만, 항상 함수와 결합해서 사용한다.
function print(value: any) {
  // 자바스크립트에 내부적으로 정의된 print()는 타입스크립트 내장함수 print()와 충돌할 수 있다.
  // printOutPut같은 걸로 변경해서 충돌을 피해준다.
  console.log(value);
}

// [제네릭] <T>
// 함수를 제네릭 함수로 변경해 함수 실행 시 작성한 인수로 함수의 타입 추론 -> 함수에 타입 안정성과 유연성 제공
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b"], "c");
// const arrays = insertAtBeginning([1, 2], "test"); // error
// updatedArray[0].splite(""); // error
