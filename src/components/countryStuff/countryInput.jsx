import { useEffect, useState } from "react";

export default function CountryInput() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const sortedData = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedData);
    }
    fetchData();
  }, []);

  return (
    <select className="Input" type="select" required>
      <option value="" className="CountryOption">
        -- Select a Country --
      </option>
      {countries.map((country) => (
        <option
          key={country.name.common}
          value={country.name.common}
          className="CountryOption"
        >
          {country.name.common}
        </option>
      ))}
    </select>
  );
}
