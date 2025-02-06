// 데이터 모델 정의

class Todo {
  // class에 추가할 속성이 있을 경우 생성자를 통해 생성하지 않고 class에 바로 추가
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
