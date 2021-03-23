import TopBar from "harmonium/lib/TopBar";
import Brand from "harmonium/lib/Brand";

const Navbar = () => {
  return (
    <TopBar>
      <Brand
        linkPath="/"
        imagePath={process.env.PUBLIC_URL + "/images/textlogo.png"}
        altTag="hello menu logo"
      />
    </TopBar>
  );
};

export default Navbar;
