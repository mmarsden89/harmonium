import { fetchRecipes } from "../api";
import React, { useEffect, useState } from "react";
import RecipeSearch from "./RecipeSearch";
import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import { titleShortener } from "../../utils.js";
import "./Recipe.scss";

import { Link } from "react-router-dom";

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

  const recipeMap = recipes.map((item) => (
    <Link
      to={{
        pathname: `/recipes/${item.id}`,
        state: { recipe: item },
      }}
    >
      <Col small={4} large={4}>
        <Card primary>
          <Card.Header className="card-header">
            <Row>
              <Col>
                <h5>{titleShortener(item.title)}</h5>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row style={{ padding: 0 }}>
              <Col style={{ padding: 0 }}>
                <img
                  src={
                    item.image ||
                    process.env.PUBLIC_URL + "/images/noimageavailable.png"
                  }
                  style={{ padding: 0, margin: 0 }}
                  className="ResponsiveImage"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  ));

  return (
    <div className="recipe-container">
      <RecipeSearch />
      {!loading && recipeMap}
    </div>
  );
};

export default Recipe;
