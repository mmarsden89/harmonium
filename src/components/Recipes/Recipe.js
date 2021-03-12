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

  useEffect(async () => {
    const recipesFetch = await fetchRecipes();
    setRecipes(recipesFetch);
    console.log(recipesFetch);
  }, []);

  const listCuisines = (cuisines) => {
    return cuisines.length > 0
      ? cuisines.map((cuisine) => `${cuisine} `)
      : "none";
  };

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
              &nbsp;{item.readyInMinutes} min
              {item.vegetarian ? (
                <FontAwesomeIcon icon={faLeaf} style={{ color: "green" }} />
              ) : null}
              {item.veryHealthy ? (
                <FontAwesomeIcon
                  icon={faBookMedical}
                  style={{ color: "darkred" }}
                />
              ) : null}
              <FontAwesomeIcon icon={faChartPie} />
              &nbsp; {item.servings}
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

  return <div className="recipe-container">{recipeMap}</div>;
};

export default Recipe;
