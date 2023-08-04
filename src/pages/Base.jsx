import { Link } from "react-router-dom";

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
    <div className="base container">
      <div className="qst">{step}</div>
      <ul>
        {bases.map((base) => (
          <li
            onClick={() => {
              setBase(base);
              e.target.classList.toggle("activated");
            }}
            key={base}
          >
            <Link to="/topping">{base}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Base;
