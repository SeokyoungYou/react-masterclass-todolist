import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function SelectCategory() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select value={category} onInput={onInput}>
      {Object.keys(Categories).map((Cat) => (
        <option value={Cat}>{Cat}</option>
      ))}
    </select>
  );
}
export default SelectCategory;
