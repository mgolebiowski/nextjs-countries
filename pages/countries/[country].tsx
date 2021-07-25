import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICountry } from "../../components/country-box";
import styles from "../../styles/CountryPage.module.css";

const CountryPage = () => {
  const router = useRouter();
  const [countryData, setCountryData] = useState<ICountry | null>(null);
  const { country } = router.query;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((data: ICountry[]) => {
        setCountryData(data[0]);
      });
  }, [country]);

  return (
    <div className={styles.countryPage}>
      <Link href="/" passHref>
        <button className={styles.backButton}>
          <span style={{ marginRight: "0.5rem" }}>
            <i className="fas fa-arrow-left"></i>
          </span>
          Back
        </button>
      </Link>
      <article className={styles.countryData}>
        <div className={styles.flagContainer}>
          {countryData?.flag && (
            <Image
              alt={`flag of ${countryData?.name}`}
              src={countryData?.flag}
              layout="responsive"
              width={300}
              height={150}
            />
          )}
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.countryName}>{countryData?.name}</h2>
          <p>Native name: {countryData?.nativeName}</p>
          <p>Population: {countryData?.population}</p>
          <p>Region: {countryData?.region}</p>
          <p>Sub region: {countryData?.subregion}</p>
          <p>Capital: {countryData?.capital}</p>
          <p></p>
          <p>Top Level domain: {countryData?.topLevelDomain.toString()}</p>
          <p>
            Currencies:{" "}
            {countryData?.currencies.map(({ name }) => name).toString()}
          </p>
          <p>
            Languages:{" "}
            {countryData?.languages.map(({ name }) => name).toString()}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CountryPage;
