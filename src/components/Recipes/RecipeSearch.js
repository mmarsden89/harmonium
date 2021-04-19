import React, { useState, useEffect } from "react";

import dummy from "../../dummy.json";

import Form from "harmonium/lib/Form";
import InputGroup from "harmonium/lib/InputGroup";
import Button from "harmonium/lib/Button";
import Input from "harmonium/lib/Input";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faLeaf,
  faBookMedical,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

import { searchRecipes } from "../api.js";

const RecipeSearch = () => {
  const [searchReturn, setSearchReturn] = useState([]);
  const [show, setShow] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {}, [searchReturn, show, query]);

  const handleChange = async (e) => {
    setShow(true);
    setQuery(e.target.value);
    if (e.target.value.length > 1) {
      const data = await searchRecipes(e.target.value);
      setSearchReturn(data);
    } else {
      setSearchReturn([]);
    }
  };

  const searchMap = searchReturn.map((item) => (
    <div className="search-item">
      <Link
        to={{
          pathname: `/recipes/${item.id}`,
          state: { recipe: item },
        }}
        className="search-return-container"
      >
        <div>{item.title}</div>{" "}
        <div>
          {item.vegetarian ? (
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ color: "green" }}
              className="icon-padding"
            />
          ) : null}
          {item.veryHealthy ? (
            <FontAwesomeIcon
              icon={faBookMedical}
              style={{ color: "darkred" }}
              className="icon-padding"
            />
          ) : null}
          <FontAwesomeIcon icon={faHourglassHalf} className="icon-padding" />
          {item.readyInMinutes} min{" "}
        </div>
      </Link>
    </div>
  ));

  const searchReturnHtml = (
    <div className="search-item-container">{searchMap}</div>
  );

  return (
    <Form
      style={{
        position: "absolute",
        zIndex: "1000",
        top: "100px",
        width: "70%",
        left: "15%",
      }}
    >
      <InputGroup>
        <InputGroup.Field>
          <Input
            type="text"
            placeholder="Search Recipes"
            onChange={handleChange}
          />
        </InputGroup.Field>
        <Link
          to={{
            pathname: `/search/${query}`,
            state: { query: query },
          }}
        >
          <Button>Search</Button>
        </Link>
      </InputGroup>
      {searchReturn.length > 0 && show && searchReturnHtml}
    </Form>
  );
};

export default RecipeSearch;
