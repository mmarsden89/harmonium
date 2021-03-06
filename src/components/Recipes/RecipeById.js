import React, { useEffect, useState } from "react";
import "./Recipe.scss";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import dompurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommonsBy } from "@fortawesome/free-brands-svg-icons";
import RecipeCard from "./RecipeCard";
import { getSimilarRecipes } from "../api.js";

import dummysimilar from "../../dummysimilar.json";

const RecipeById = (props) => {
  const { state } = props.location;
  const { recipe } = props.location.state;
  console.log("recipe===>", recipe);

  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const data = await getSimilarRecipes(recipe.id);
    setSimilarRecipes(data);
    // setSimilarRecipes(dummysimilar);
    setLoading(false);
  }, [recipe]);

  const ingredientsMap = recipe.extendedIngredients.map((ingredient) => (
    <div>{ingredient.original}</div>
  ));

  const instructionsMap = recipe.analyzedInstructions[0].steps.map(
    (instruction) => <li>{instruction.step}</li>
  );

  const sanitizer = dompurify.sanitize;

  const removeLinks = (str) => {
    let split = str.split(".");
    let arr = [];
    for (let i = 0; i < split.length; i++) {
      if (!split[i].includes("<a") && !split[i].includes("/a>")) {
        arr.push(split[i]);
      }
    }
    return arr.join(".");
  };

  const similarMap = similarRecipes.map((item) => (
    <RecipeCard item={item} size={12} />
  ));

  const similarContainer = (
    <Col large={4} className="similar-recipe-container">
      <div>
        <h2 style={{ color: "white" }}>Similar Recipes</h2>
      </div>
      {similarMap}
    </Col>
  );

  return (
    <div className="recipe-by-id-container">
      <Col large={8}>
        <Card primary>
          <Card.Header>
            <Col small={5} large={5} style={{ padding: "0 50px" }}>
              <img
                src={
                  recipe.image ||
                  process.env.PUBLIC_URL + "/images/noimageavailable.png"
                }
                className="ResponsiveImage recipe-picture"
              />
            </Col>
            <Col small={7} large={7} style={{ paddingTop: "10px" }}>
              <Row>
                <h2>{recipe.title}</h2>
              </Row>
              <Row>
                <div>
                  <FontAwesomeIcon icon={faClock} /> &nbsp;
                  <b>Prep Time:</b> {recipe.readyInMinutes} minutes
                </div>
                <div>
                  <FontAwesomeIcon icon={faUtensils} /> &nbsp;
                  <b>Yield:</b> {recipe.servings} servings
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} /> &nbsp;
                  <b>Score:</b> {recipe.spoonacularScore} %
                </div>
              </Row>
            </Col>
            <Row
              style={{ padding: "25px 50px" }}
              dangerouslySetInnerHTML={{
                __html: removeLinks(sanitizer(recipe.summary)),
              }}
            ></Row>
          </Card.Header>
          <Card.Body>
            <Row style={{ padding: "0 50px" }}>
              <h4>ingredients</h4>
              <Col large={8} className="ingredients-list">
                {ingredientsMap}
              </Col>
              <Col large={4}></Col>
            </Row>

            <Row style={{ padding: "0 50px" }}>
              <h4>instructions</h4>
              <Col large={10}>
                <ol>{instructionsMap || null}</ol>
              </Col>
            </Row>
            <Row style={{ marginTop: "45px" }}>
              <div style={{ fontSize: "10px" }}>
                <FontAwesomeIcon icon={faCreativeCommonsBy} /> &nbsp;
                <b>Source:</b>{" "}
                <a href={recipe.sourceUrl} target="_blank">
                  {recipe.sourceUrl}
                </a>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {similarContainer}
    </div>
  );
};

export default RecipeById;
