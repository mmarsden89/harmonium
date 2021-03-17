import TopBar from "harmonium/lib/TopBar";
import Menu from "harmonium/lib/Menu";
import Form from "harmonium/lib/Form";
import InputGroup from "harmonium/lib/InputGroup";
import Button from "harmonium/lib/Button";
import Brand from "harmonium/lib/Brand";
import Input from "harmonium/lib/Input";

const Navbar = () => {
  return (
    <TopBar>
      <Brand
        linkPath="/"
        imagePath={process.env.PUBLIC_URL + "/images/textlogo.png"}
        altTag="hello menu logo"
      />
      <TopBar.Item>
        <Form>
          <InputGroup>
            <InputGroup.Field>
              <Input type="text" placeholder="Search Recipes" />
            </InputGroup.Field>
            <Button>Search</Button>
          </InputGroup>
        </Form>
      </TopBar.Item>
    </TopBar>
  );
};

export default Navbar;
