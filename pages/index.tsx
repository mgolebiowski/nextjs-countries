import { useCallback, useEffect, useState } from "react";
import Header from "next/head";
import CountryBox, { ICountry } from "../components/country-box";

import SearchForm from "../components/search-form";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [countryList, setCountryList] = useState<ICountry[]>([]);
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data: ICountry[]) => {
        setCountryList(data);
        setCountriesToShow(data);
      });
  }, []);

  const onSearch = useCallback(
    (query, chosenRegion) => {
      const newCountries = countryList
        .filter(({ region }) => chosenRegion === null || region === chosenRegion)
        .filter(
          ({ name }) =>
            query === null || name.toLowerCase().includes(query.toLowerCase())
        );
      setCountriesToShow(newCountries);
    },
    [countryList]
  );

  return (
    <div className={styles.container}>
      <Header>
        <title>Flags finder</title>
      </Header>
      <main className={styles.main}>
        <SearchForm {...{ onSearch }} />
        <div className={styles.countriesList}>
          {countriesToShow.map((country) => (
            <CountryBox key={country.alpha2Code} country={country} />
          ))}
        </div>
      </main>
    </div>
  );
}
