import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="topping container">
      <div className="qst">{step}</div>
      <ul>
        {toppings.map((topping) => (
          <li
            key={topping}
            onClick={(e) => {
              getToppings(topping);
              e.target.classList.toggle("activated");
            }}
          >
            {topping}
          </li>
        ))}
      </ul>
      <button>
        <Link to="/order">order</Link>
      </button>
    </div>
  );
};

export default Topping;
