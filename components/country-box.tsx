import Image from "next/image";
import Link from "next/link";

import styles from "../styles/CountryBox.module.css";

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  name: string;
}

export interface ICountry {
  alpha2Code: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flag: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: ICurrency[];
  languages: ILanguage[];
}

export default function CountryBox({ country }: { country: ICountry }) {
  return (
    <Link href={`/countries/${country.name}`} passHref>
      <div className={styles.CountryBox}>
        <Image
          alt={`flag of ${country.name}`}
          src={country.flag}
          layout="responsive"
          width={350}
          height={200}
        />
        <div className={styles.details}>
          <h3>{country.name}</h3>
          <p>
            Population:{" "}
            {new Intl.NumberFormat("en-US").format(country.population)}
          </p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </div>
    </Link>
  );
}
