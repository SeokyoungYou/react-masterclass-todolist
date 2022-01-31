import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState, TODOS_LS } from "../atoms";
import { cats } from "./CreateCategory";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      const returnToDo = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem(TODOS_LS, JSON.stringify(returnToDo));
      return returnToDo;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {Object.keys(cats).map(
        (Cat) =>
          category !== Cat && (
            <button name={Cat} onClick={onClick}>
              {Cat}
            </button>
          )
      )}
    </li>
  );
}

export default ToDo;
