import fetchRecipes from "./api";
import React, { useEffect, useState } from "react";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    const recipesFetch = await fetchRecipes();
    setRecipes(recipesFetch);
    console.log(recipesFetch);
  }, []);

  const recipeMap = recipes.map((item) => (
    <Col large={3}>
      <Card primary>
        <Card.Header>
          <Row className="rev-Row--flex rev-Row--middle">
            <Col>
              <h5>{item.title}</h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <img src={item.image} className="ResponsiveImage" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));

  return <div>{recipeMap}</div>;
};

export default Recipe;
