import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import "./stylesRickAndMorty.css";

interface CharactersEntity {
  id: string;
  name: string;
  gender: string;
  status: string;
  image: string;
}

export const RickAndMortyPage = () => {
  const [search, setSearch] = React.useState("Rick");
  const [searchResults, setSearchResults] = React.useState<CharactersEntity[]>(
    []
  );
  const [debouncedFilter] = useDebounce(search, 800);

  React.useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${debouncedFilter}`
        );
        console.log(response);
        if (!response.ok) {
          setSearch("Rick");
          throw new Error(
            `There was an error with your request. ${debouncedFilter} might not exist.`
          );
        }
        const data = await response.json();

        setSearchResults(data.results);
      } catch (error) {
        alert(
          `There was an error with your request. ${debouncedFilter} might not exist.`
        );
      }
    };

    if (debouncedFilter) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedFilter]);

  return (
    <>
      <h2>Rick & Morty List Characters</h2>
      <br />

      <div>
        <label>Character: </label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="container">
        <div className="headers">
          <span>ID</span>
          <span>Name</span>
          <span>Gender</span>
          <span>Status</span>
        </div>

        {searchResults.length > 0 ? (
          searchResults.map((character) => (
            <div key={character.id} className="character">
              <img src={character.image} alt={character.name} />
              <span>{character.name}</span>
              <span>{character.gender}</span>
              <span>{character.status}</span>
            </div>
          ))
        ) : (
          <p>No search results</p>
        )}
      </div>

      <Link to="/selection">Navigate to selection page</Link>
    </>
  );
};
