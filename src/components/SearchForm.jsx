import { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!e.target.elements.search.value) return;
    setSearchTerm(e.target.elements.search.value);
  };
  return (
    <section>
      <h1 className="title">Upsplash Images</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="form-input "
          name="search"
          placeholder="Search images"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
