import { useContext } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../contexts/DataContext";
import { darkMode, ThemeContext } from "../../contexts/ThemeContext";
import Header from "../../components/Header";
export default function CountryPage() {
  const { countries } = useContext(DataContext);
  const { darkMode } = useContext(ThemeContext);
  const router = useRouter();
  const country = router.query.county;

  console.log("country :", country);
  console.log("countries " + countries);
  const selectedCountry = countries.find((c) => c.cca3 === country);
  console.log("selectedCountry :", selectedCountry);

  return (
    <>
      <Header />
      <div className={`country-details ${darkMode ? "dark" : ""}`}>
        <button className="back-btn" onClick={()=>router.push('/')}>← Back</button>
        <img
          src={selectedCountry.flags.svg}
          alt={`${selectedCountry.name.common} flag`}
          className="country-flag"
              />
              <h1>{selectedCountry.name.common}</h1>
        <div className="country-info">
          
          <div className="info-group">
            <p>
              <strong>Capital:</strong>
              {selectedCountry.capital}
            </p>
            <p>
              <strong>Population:</strong>
              {selectedCountry.population}
            </p>

            <p className="border-list ">
              <strong>Borders:</strong>
              <div>
                {selectedCountry.borders?.length > 0 ? (
                  selectedCountry.borders.map((border, index) => (
                    <div className={`border-item  ${darkMode ? "dark" : ""}`} key={index}>
                      {border}
                    </div>
                  ))
                ) : (
                  <div>No Borders</div>
                )}
              </div>
            </p>
          </div>
          <div className="info-group">
            <p>
              <strong>Region:</strong>
              {selectedCountry.region}
            </p>
            <p>
              <strong>Native Name:</strong>
              {selectedCountry.name?.nativeName
                ? Object.values(selectedCountry.name.nativeName)[0]?.common
                : "N/A"}
            </p>
            <p>
              <strong>currency:</strong>
              {selectedCountry.currencies
                ? Object.values(selectedCountry.currencies)[0]?.name
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
