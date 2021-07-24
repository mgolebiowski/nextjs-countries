import { SyntheticEvent, useEffect, useState } from "react";
import styles from "../styles/SearchForm.module.css";

type NullableString = string | null;

interface SearchFormProps {
  onSearch: (query: NullableString, continent: NullableString) => void;
}

export default function SearchForm({ onSearch = () => {} }: SearchFormProps) {
  const [chosenContinent, chooseContinent] = useState<NullableString>(null);
  const [query, setQuery] = useState<NullableString>(null);

  function setSearchState(e: SyntheticEvent) {
    if (e.currentTarget.id === 'country') {
      setQuery((e.currentTarget as HTMLInputElement).value);
    } else if (e.currentTarget.id === 'continent') {
      chooseContinent((e.currentTarget as HTMLInputElement).value || null);
    }
  }

  useEffect(() => {
    onSearch(query, chosenContinent);
  }, [onSearch, query, chosenContinent]);

  return (
    <form className={styles.searchForm}>
      <input name="country" type="text" id="country" onChange={setSearchState}></input>
      <select name="continent" id="continent" value={chosenContinent || ''} onChange={setSearchState}>
        <option value=''>--</option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
