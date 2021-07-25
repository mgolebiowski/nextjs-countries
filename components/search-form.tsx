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
      <div className={styles.search}>
        <i className={`fas fa-search ${styles.searchIcon}`}></i>
        <input
          name="country"
          type="text"
          id="country"
          className={styles.searchInput}
          onChange={setSearchState}
          placeholder="Search for a country..."
        ></input>
      </div>
      <select
        name="region"
        id="region"
        value={chosenRegion || ""}
        onChange={setSearchState}
        style={chosenRegion ? {} : { color: 'var(--color-search-icon)' }}
        className={styles.regionInput}
      >
        <option value="">Filter by region...</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
}
