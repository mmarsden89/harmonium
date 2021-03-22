import React, { useState, useEffect } from "react";

import Form from "harmonium/lib/Form";
import InputGroup from "harmonium/lib/InputGroup";
import Button from "harmonium/lib/Button";
import Input from "harmonium/lib/Input";

import { searchRecipes } from "./api.js";

const RecipeSearch = () => {
  const [searchReturn, setSearchReturn] = useState([]);

  useEffect(() => {}, [searchReturn]);

  const handleChange = async (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 1) {
      const data = await searchRecipes(e.target.value);
      setSearchReturn(data);
    } else {
      setSearchReturn([]);
    }
  };

  const searchMap = searchReturn.map((item) => (
    <div style={{ backgroundColor: "white" }}>{item.title}</div>
  ));

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
      {searchReturn && searchMap}
    </Form>
  );
};

export default RecipeSearch;
