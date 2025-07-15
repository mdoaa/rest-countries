import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children ,countries}) {
/*  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios("https://restcountries.com/v2/all?fields=name,capital,region,flags,population,subregion,topLevelDomain,currencies,languages,borders");
        const data = res.data;
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err.message);
      }
    }

    fetchData();
  }, []);*/

  return (
    <DataContext.Provider value={{ countries }}>
      {children}
    </DataContext.Provider>
  );
}
