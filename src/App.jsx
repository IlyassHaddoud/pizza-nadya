import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Topping from "./pages/Topping";
import Order from "./pages/Order";
import { useState } from "react";

const App = () => {
  const [order, setOrder] = useState();
  const setBase = (base) => {
    setOrder({ base });
  };
  const setToppings = (toppings) => {
    setOrder({ ...order, toppings: [toppings] });
  };
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base order={order} setBase={setBase} />}
        />
        <Route
          path="/topping"
          element={<Topping order={order} setToppings={setToppings} />}
        />
        <Route path="/order" element={<Order order={order} />} />
      </Routes>
    </div>
  );
};

export default App;
