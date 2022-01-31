import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, toDoState, TODOS_LS } from "../atoms";
interface IForm {
  toDo: string;
}

export let toDos = new Array<IToDo>();
function CreateToDo() {
  const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  };
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    const newTodo = { text: toDo, id: Date.now(), category };
    setToDos((oldToDos) => [newTodo, ...oldToDos]);
    toDos.push(newTodo);
    saveToDos();
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add to do</button>
    </form>
  );
}
const savedToDos = localStorage.getItem(TODOS_LS);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
}

export default CreateToDo;
