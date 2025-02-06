import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  // 객체 타입 정의
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

// 컨텍스트 정의
export const TodosContext = React.createContext<TodoContextObj>({
  // 실제로 동작하는 자바스크립트 코드. 여기서 타입 정의 불가능
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo); // newTodo가 병합된 새 배열 반환
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
