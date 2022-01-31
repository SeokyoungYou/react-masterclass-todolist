import { atom, selector } from "recoil";

export const Categories = {
  TO_DO: "TO_DO",
  DOING: "DOING",
  DONE: "DONE",
};
// export enum Categories {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }
export interface IToDo {
  text: string;
  id: number;
  category: string; //Categories;
}
export const TODOS_LS = "currentToDos";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
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
