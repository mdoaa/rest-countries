import "@/styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { DataProvider } from "../contexts/DataContext";

export default function App({ Component, pageProps, countries}) {
  return (
    <ThemeProvider>
      <DataProvider countries={countries}>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeProvider>
    

  )
}
App.getInitialProps = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,topLevelDomain,currencies,languages,borders,cca3"
  );
  const data = await res.json();
 // const top50 = data.slice(0, 50);

  return { countries: data };
};