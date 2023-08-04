import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="brand">
        <Link to="/">Pizza Nadya</Link>
      </div>
    </div>
  );
};

export default Header;
