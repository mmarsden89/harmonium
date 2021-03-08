import "./App.scss";
import TopBar from "harmonium/lib/TopBar";
import Menu from "harmonium/lib/Menu";
import Form from "harmonium/lib/Form";
import InputGroup from "harmonium/lib/InputGroup";
import Button from "harmonium/lib/Button";
import Brand from "harmonium/lib/Brand";
import Input from "harmonium/lib/Input";

function App() {
  return (
    <div className="App">
      <TopBar>
        <Brand
          linkPath="/"
          imagePath={process.env.PUBLIC_URL + "/images/logo.png"}
          altTag="logo alt tag"
          children="Hello Menu"
        />
        <TopBar.Item>
          <Menu horizontalLeft>
            <Menu.Item>
              <a href="#one">One</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#two">Two</a>
            </Menu.Item>
          </Menu>
        </TopBar.Item>
        <TopBar.Item>
          <Form>
            <InputGroup>
              <InputGroup.Field>
                <Input type="text" placeholder="Search" />
              </InputGroup.Field>
              <Button>Search</Button>
            </InputGroup>
          </Form>
        </TopBar.Item>
      </TopBar>
    </div>
  );
}

export default App;
