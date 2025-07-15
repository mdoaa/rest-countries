import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const { countries } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");

  //console.log(countries)

  const handleCountry = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Country:", filteredCountries);
    setSearchResults(filteredCountries);
  };

  const handleRegionFilter = (e) => {
    const selectedRegion = e.target.value;
    setRegionFilter(selectedRegion);
    if (selectedRegion) {
      const filteredCountries = countries.filter(
        (country) => country.region === selectedRegion
      );
      setSearchResults(filteredCountries);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <Head>
        <title>REST Countries</title>
      </Head>
      <Header />
      <div className={`filter ${darkMode ? "dark" : ""}`}>
        <div className={`search-container ${darkMode ? "dark" : ""}`}>
          <input
            type="text"
            placeholder="Search for your country"
            className={`search-bar ${darkMode ? "dark" : ""}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon" onClick={handleCountry}>
            search
          </button>
        </div>
        <div className={`filter-container ${darkMode ? "dark" : ""}`}>
          <select onChange={handleRegionFilter} value={regionFilter} className={`filter-list ${darkMode ? "dark" : ""} `} >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <main className={`container ${darkMode ? "dark" : ""}`}>
        
        {searchResults.length > 0 && (
          <div className="grid">
            {searchResults.map((country) => (
              <Link
                href={`/country/${country.cca3}`}
                key={country.cca3}
                passHref
              >
                <div className="card">
                  <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                  />
                  <div className="card-content">
                    <h2>{country.name.common}</h2>
                    <p>
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                      <strong>Capital:</strong> {country.capital || "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {searchResults.length === 0 && (
          <div className="grid">
            {countries.map((country) => (
              <Link
                href={`/country/${country.cca3}`}
                key={country.cca3}
                passHref
              >
                <div className="card">
                  <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                  />
                  <div className="card-content">
                    <h2>{country.name.common}</h2>
                    <p>
                      <strong>Population:</strong>{" "}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                      <strong>Capital:</strong> {country.capital || "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
