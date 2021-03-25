import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import "./Recipe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensils,
  faBookMedical,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

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

  return (
    <Col large={8} style={{ marginTop: "25px", marginLeft: "25px" }}>
      <Card primary>
        <Card.Header>
          <Col small={5} large={5}>
            <img
              src={
                recipe.image ||
                process.env.PUBLIC_URL + "/images/noimageavailable.png"
              }
              className="ResponsiveImage recipe-picture"
            />
          </Col>
          <Col small={5} large={5}>
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
            </Row>
          </Col>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col large={8} className="ingredients-list">
              {ingredientsMap}
            </Col>
            <Col large={4}></Col>
          </Row>

          <Row>
            <Col large={10}>
              <ol>{instructionsMap}</ol>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeById;
