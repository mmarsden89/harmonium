import React, { useState, useEffect } from "react";

import dummy from "../../dummy.json";

import Form from "harmonium/lib/Form";
import InputGroup from "harmonium/lib/InputGroup";
import Button from "harmonium/lib/Button";
import Input from "harmonium/lib/Input";

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

  useEffect(() => {}, [searchReturn]);

  const handleChange = async (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 1) {
      // const data = await searchRecipes(e.target.value);
      // setSearchReturn(data);
      setSearchReturn(dummy);
    } else {
      setSearchReturn([]);
    }
  };

  const searchMap = searchReturn.slice(0, 10).map((item) => (
    <div className="search-item">
      {item.title} <FontAwesomeIcon icon={faHourglassHalf} />
      {item.readyInMinutes} min{" "}
      {item.vegetarian ? (
        <FontAwesomeIcon icon={faLeaf} style={{ color: "green" }} />
      ) : null}
      {item.veryHealthy ? (
        <FontAwesomeIcon icon={faBookMedical} style={{ color: "darkred" }} />
      ) : null}
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
        <Button>Search</Button>
      </InputGroup>
      {searchReturn.length > 0 && searchReturnHtml}
    </Form>
  );
};

export default RecipeSearch;
