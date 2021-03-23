import { fetchRecipes } from "../api";
import React, { useEffect, useState } from "react";
import RecipeSearch from "./RecipeSearch";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import { titleShortener } from "../../utils.js";
import "./Recipe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faLeaf,
  faBookMedical,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

import dummy from "../../dummy.json";

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState("");
  const [queryParams, setQueryParams] = useState([]);
  const [context, setContext] = useState("random");
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    // const recipesFetch = await fetchRecipes(context, diet);
    // setRecipes(recipesFetch);
    // console.log("recipe---s>>>", recipesFetch);
    console.log("dummy--->", dummy);
    setRecipes(dummy);
    setLoading(false);
  }, [diet, queryParams]);

  const listCuisines = (cuisines) => {
    return cuisines.length > 0
      ? cuisines.map((cuisine) => `${cuisine} `)
      : "none";
  };

  const handleDiet = () => {
    setDiet("vegetarian");
    setContext("complexSearch");
    setQueryParams([...queryParams, "vegetarian"]);
  };

  const handleDietDefault = () => {
    setDiet("");
    setQueryParams([]);
  };

  const dietMap = queryParams.map((item) => (
    <div className="query-tag">
      <div>{item}</div>
      <div
        style={{ padding: "0px 5px", fontWeight: "900" }}
        onClick={handleDietDefault}
      >
        x
      </div>
    </div>
  ));

  const recipeMap = recipes.map((item) => (
    <Col large={3}>
      <Card primary>
        <Card.Header>
          <Row className="rev-Row--flex rev-Row--middle">
            <Col>
              <h5>{titleShortener(item.title)}</h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <img
                src={
                  item.image ||
                  process.env.PUBLIC_URL + "/images/noimageavailable.png"
                }
                className="ResponsiveImage"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faHourglassHalf} />
              &nbsp;{item.readyInMinutes} min &nbsp;
              <FontAwesomeIcon icon={faChartPie} />
              &nbsp; {item.servings} &nbsp;
              {item.vegetarian ? (
                <FontAwesomeIcon
                  icon={faLeaf}
                  style={{ color: "green" }}
                  onClick={handleDiet}
                />
              ) : null}
              &nbsp;&nbsp;
              {item.veryHealthy ? (
                <FontAwesomeIcon
                  icon={faBookMedical}
                  style={{ color: "darkred" }}
                />
              ) : null}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <h6>{listCuisines(item.cuisines)}</h6>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  ));

  return (
    <div className="recipe-container">
      <RecipeSearch />
      <div className="tag-container">{dietMap}</div>
      {!loading && recipeMap}
    </div>
  );
};

export default Recipe;
