import Image from 'next/image';

import styles from '../styles/CountryBox.module.css';

export interface ICountry {
  alpha2Code: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  flag: string;
}

export default function CountryBox({ country }: { country: ICountry }) {
  return (
    <div className={styles.CountryBox}>
      <Image alt={`flag of ${country.name}`} src={country.flag} layout='responsive' width={document.body.clientWidth} height={200} />
      <div className={styles.details}>
        <h3>{country.name}</h3>
        <p>Population: {new Intl.NumberFormat('en-US').format(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}
