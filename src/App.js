import  { useState, useEffect } from "react";
import Navigation from "./components/navigation/Nav";
import Stage from "./components/stages_page/Stage";
import { ChakraProvider } from "@chakra-ui/react";
import Offre from "./components/offre_componenet/Offre";
import { getData } from "./components/lesoffres/getdata";
function App() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
        //console.log('Fetched Data:', fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  //-----------------input of search
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((item) =>
    item.nom.toLowerCase().includes(query.toLowerCase())!==-1
  );

  //-----------------radio filters
  const handleChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredOffers = data;

    // ----------------------Filtering search input
    if (query) {
      filteredOffers = filteredOffers.filter(
        (offer) => offer.nom.toLowerCase().includes(query.toLowerCase())
      );
    }

    // --------------------------Selected filter
    if (selected) {
      filteredOffers = filteredOffers.filter(
        ({ domain, preferences_a_distance, niveau_education, type, duree, lieu }) =>
          domain === selected ||
          preferences_a_distance === selected ||
          niveau_education === selected ||
          type === selected ||
          duree === selected ||
          lieu === selected
      );
    }

    return filteredOffers.map(
      ({ img, nom, description, poste, duree, type_du_travaille, lieu, domain, preferences_a_distance }) => (
        <Offre
          key={Math.random()}
          img={img}
          nom={nom}
          description={description}
          poste={poste}
          duree={duree}
          type_du_travaille={type_du_travaille}
          lieu={lieu}
          preferences_a_distance={preferences_a_distance}
          domain={domain}
        />
      )
    );
  }

  const result = filteredData(data, selectedDomain, query);

  return (
    <>
      <ChakraProvider>
        <Navigation result={result} query={query} handleChange={handleChange} handleInputChange={handleInputChange} />
        <Stage result={result} handleChange={handleChange} />
      </ChakraProvider>
    </>
  );
}

export default App;
