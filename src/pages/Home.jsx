import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home container"
    >
      <h1>Welcome to Pizza Nadya</h1>
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
      >
        <Link to="/base">Make Your Pizza</Link>
      </motion.button>
    </motion.div>
  );
};

export default Home;
