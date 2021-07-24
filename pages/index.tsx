import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

interface ICountry {
  alpha2Code: string;
  name: string;
}

export default function Home() {
  const [countryList, setCountryList] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data: ICountry[]) => {
        setCountryList(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.searchForm}>
          <form>
            <input name="country" type="text"></input>
            <select name="continent" id="continent">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
        <div className={styles.countriesList}>
          {countryList.map((country) => (
            <div key={country.alpha2Code}>
              <h3>{country.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
