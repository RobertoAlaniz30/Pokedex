import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { filterPokemon } from "../../store/actions";
import "./styles.css";

const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const SearchInput = useRef(null);

  useEffect(() => {
    dispatch(filterPokemon(inputValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="input-main-container">
      <input
        type="text"
        reference={SearchInput}
        placeholder={"Find your pokemon"}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
