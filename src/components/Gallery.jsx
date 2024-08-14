import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const res = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (res.isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (res.isError) {
    return (
      <section>
        <h4>There was a problem.</h4>
      </section>
    );
  }

  const results = res.data.results;
  if (results < 1) {
    return (
      <section className="image-container">
        <h3>No results were found</h3>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img src={url} key={item.id} alt={item.description} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
