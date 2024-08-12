import { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!e.target.elements.search.value) return;
    console.log("search", e.target.elements.search.value);
  };
  return (
    <section>
      <h1 className="title">Upsplash Images</h1>
      <form onSubmit={handleSearch}>
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
