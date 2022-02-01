import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, categoryState, CATS_LS } from "../atoms";

interface IForm {
  category: string;
}
export let cats = {};
Object.assign(cats, Categories);
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    Object.assign(Categories, { [category]: category });
    Object.assign(cats, Categories);
    localStorage.setItem(CATS_LS, JSON.stringify(cats));
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", { required: "Please write a category" })}
        placeholder="Wirte a new category"
      />
      <button>Add category</button>
    </form>
  );
}
const savedCats = localStorage.getItem(CATS_LS);
if (savedCats !== null) {
  const parsedCats = JSON.parse(savedCats);
  cats = parsedCats;
}
export default CreateCategory;
