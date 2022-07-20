import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoGames } from "../actions";
import "../styles/SearchBarStyle.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handInputChange(p) {
    p.preventDefault();
    setName(p.target.value);
    //console.log(name)
  }
  function handleSubmit(p) {
    p.preventDefault();
    dispatch(getVideoGames(name));
    setName("")
  }

  return (
    <div>
      <form onSubmit={(p) => handleSubmit(p)}>
        <input
          className="searchb"
          type="text"
          placeholder="Search game by name..."
          value={name}
          onChange={(p) => handInputChange(p)}
        />

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  )
}
