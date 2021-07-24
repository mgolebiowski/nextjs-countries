import { useCallback, useEffect, useState } from "react";

import SearchForm from "../components/search-form";

import styles from "../styles/Home.module.css";

interface ICountry {
  alpha2Code: string;
  name: string;
  region: string;
}

export default function Home() {
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data: ICountry[]) => {
        setCountryList(data);
        setCountriesToShow(data);
      });
  }, []);

  const onSearch = useCallback((query, continent) => {
    const newCountries = countryList
      .filter(({ region }) => (continent === null || region === continent))
      .filter(({ name }) =>
        query === null || name.toLowerCase().includes(query.toLowerCase())
      );
    setCountriesToShow(newCountries);
  }, [countryList]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchForm {...{ onSearch }} />
        <div className={styles.countriesList}>
          {countriesToShow.map((country) => (
            <div key={country.alpha2Code}>
              <h3>{country.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
