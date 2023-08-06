import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topping = ({ order, setToppings }) => {
  const [selectedTopping, setSelectedToppings] = useState([]);
  const getToppings = (topping) => {
    if (!selectedTopping.includes(topping)) {
      setSelectedToppings((prevSelectedTopping) => [
        ...prevSelectedTopping,
        topping,
      ]);
    }
    setToppings(selectedTopping);
  };
  const step = "Step 2: Choose Toppings";
  const toppings = [
    "Marinara sauce",
    "Chicken breast",
    "Green peppers",
    "Black olives",
    "Spinach",
    "Mushrooms",
    "Onions",
    "Tomato",
  ];

  useEffect(() => {
    console.log(selectedTopping);
    setToppings(selectedTopping);
  }, [selectedTopping]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="topping container"
    >
      <div className="qst">{step}</div>
      <ul>
        {toppings.map((topping) => (
          <motion.li
            whileHover={{ scale: 1.3 }}
            key={topping}
            onClick={(e) => {
              getToppings(topping);
              e.target.classList.toggle("activated");
            }}
          >
            {topping}
          </motion.li>
        ))}
      </ul>
      <button>
        <Link to="/order">order</Link>
      </button>
    </motion.div>
  );
};

export default Topping;
