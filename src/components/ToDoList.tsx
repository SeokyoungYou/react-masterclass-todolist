import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  toDoSelector,
  toDoState,
  IToDo,
  TODOS_LS,
} from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo, { toDos } from "./CreateToDo";
import SelectCategory from "./SelectCategory";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  // const savedToDos = localStorage.getItem(TODOS_LS);
  // const toDos = JSON.parse(savedToDos || "");
  // const toDos = JSON.parse(localStorage.getItem(TODOS_LS || "")!);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateCategory />
      <SelectCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
