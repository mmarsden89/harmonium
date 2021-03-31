import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import dompurify from "dompurify";
import "./Recipe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils, faStar } from "@fortawesome/free-solid-svg-icons";

const RecipeById = (props) => {
  console.log("props--->", props.location.state.recipe);
  const { state } = props.location;

  const { recipe } = props.location.state;

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
              <Col large={8} className="ingredients-list">
                {ingredientsMap}
              </Col>
              <Col large={4}></Col>
            </Row>

            <Row style={{ padding: "0 50px" }}>
              <Col large={10}>
                <ol>{instructionsMap}</ol>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default RecipeById;
