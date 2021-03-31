import Card from "harmonium/lib/Card";
import Col from "harmonium/lib/Col";
import Row from "harmonium/lib/Row";
import { Link } from "react-router-dom";
import { titleShortener } from "../../utils.js";

const RecipeCard = (props) => {
  console.log("props--->", props);
  const { id, title, image, item } = props;
  return (
    <Link
      to={{
        pathname: `/recipes/${id}`,
        state: { recipe: item },
      }}
    >
      <Col small={4} large={4}>
        <Card primary>
          <Card.Header className="card-header">
            <Row>
              <Col>
                <h5>{titleShortener(title)}</h5>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row style={{ padding: 0 }}>
              <Col style={{ padding: 0 }}>
                <img
                  src={
                    image ||
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
  );
};

export default RecipeCard;
