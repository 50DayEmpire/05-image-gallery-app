import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = async () => {
    const key = "client_id=UXonXEMq7mNYHvnAxxuRZDOGhZY8VUO-iMymoL4q2kY";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&per_page=50&${key}`;
    }

    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  };

  useEffect(() => {
    peticion();
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Buscar: <input type="text" name="inputText" className="w-100" />
        </label>
        <button type="submit" className="btn btn-warning m-2">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      <hr />

      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls?.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
