import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
