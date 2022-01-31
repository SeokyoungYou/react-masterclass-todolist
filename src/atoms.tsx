import { atom, selector } from "recoil";
import { toDos } from "./components/CreateToDo";

export const Categories = {
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
};
export interface IToDo {
  text: string;
  id: number;
  category: string; //Categories;
}
export const TODOS_LS = "currentToDos",
  CATS_LS = "currentCats";

const localStorageToDos = localStorage.getItem(TODOS_LS);
const parsedToDos = JSON.parse(localStorageToDos as any);
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsedToDos?.length > 0 ? parsedToDos : [],
});
export const categoryState = atom<string>({
  //Categories
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
