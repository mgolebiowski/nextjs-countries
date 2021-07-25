import { SyntheticEvent, useEffect, useState } from "react";
import styles from "../styles/SearchForm.module.css";

type NullableString = string | null;

interface SearchFormProps {
  onSearch: (query: NullableString, region: NullableString) => void;
}

export default function SearchForm({ onSearch = () => {} }: SearchFormProps) {
  const [chosenRegion, chooseRegion] = useState<NullableString>(null);
  const [query, setQuery] = useState<NullableString>(null);

  function setSearchState(e: SyntheticEvent) {
    if (e.currentTarget.id === "country") {
      setQuery((e.currentTarget as HTMLInputElement).value);
    } else if (e.currentTarget.id === "region") {
      chooseRegion((e.currentTarget as HTMLInputElement).value || null);
    }
  }

  useEffect(() => {
    onSearch(query, chosenRegion);
  }, [onSearch, query, chosenRegion]);

  return (
    <form className={styles.searchForm}>
      <input
        name="country"
        type="text"
        id="country"
        onChange={setSearchState}
      ></input>
      <select
        name="region"
        id="region"
        value={chosenRegion || ""}
        onChange={setSearchState}
      >
        <option value="">--</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
