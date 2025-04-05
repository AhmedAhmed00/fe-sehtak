import { useSearchParams } from "react-router-dom";

export default function useClientFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(e) {
    const formData = new FormData(e.target);
    const filterdObj = Object.fromEntries(formData.entries());

    for (const key in filterdObj) {
      if (typeof filterdObj[key] === "string" && !filterdObj[key].trim()) {
        delete filterdObj[key];
      }
    }

    setSearchParams(filterdObj);
  }

  return { searchParams, setSearchParams, handleFilter };
}
