import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="brand">
        <Link to="/">Pizza Nadya</Link>
      </div>
    </motion.div>
  );
};

export default Header;
