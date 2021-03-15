import fetchRecipes from "./api";
import React, { useEffect, useState } from "react";
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

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState(["vegan"]);

  useEffect(async () => {
    const recipesFetch = await fetchRecipes(diet);
    setRecipes(recipesFetch);
    console.log(recipesFetch);
  }, [diet]);

  const listCuisines = (cuisines) => {
    return cuisines.length > 0
      ? cuisines.map((cuisine) => `${cuisine} `)
      : "none";
  };

  const handleDiet = () => {
    const tempDiet = [...diet];
    if (!tempDiet.includes("vegetarian")) tempDiet.push("vegetarian");
    setDiet(tempDiet);
  };

  const dietMap = diet.map((item) => (
    <div small={2} className="query-tag">
      {item}
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
      <div className="tag-container">{dietMap}</div>
      {recipeMap}
    </div>
  );
};

export default Recipe;
