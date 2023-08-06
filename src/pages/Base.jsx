import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ order, setBase }) => {
  const step = "Step 1: Choose Your Base";
  const bases = [
    "Stuffed Crust",
    "Cracker Crust",
    "Flat Bread Crust",
    "Thin Crust",
    "Cheese Crust Pizza",
    "Thick Crust Pizza",
    "Wrapping It Up",
  ];
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="base container"
    >
      <div className="qst">{step}</div>
      <ul>
        {bases.map((base) => (
          <motion.li
            whileHover={{ scale: 1.3 }}
            onClick={() => {
              setBase(base);
              e.target.classList.toggle("activated");
            }}
            key={base}
          >
            <Link to="/topping">{base}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Base;
