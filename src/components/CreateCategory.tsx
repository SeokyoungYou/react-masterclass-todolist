import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

interface IForm {
  category: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    Object.assign(Categories, { [category]: category });
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

export default CreateCategory;
