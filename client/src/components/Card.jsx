import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";

export default function Card({ image, name, rating, genre, id }) {
  // console.log(genre)
  return (
    <div>
      <div className="cards2">
        <div >
          <NavLink className={"NavLink"} to={"/videogames/" + id}>
            <div className="card">
              <img
                className="image2"
                src={image}
                alt="Not found"
                width="330px"
                height="250px"
              />
              <h2 className="title2">{name}</h2>
              <h5 className="genres2">Genres: {genre.join(", ")} </h5>
              <h5 className="rat">Rating: {rating} </h5>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
