import { motion } from "framer-motion";

const Order = ({ order }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="order container"
    >
      {console.log(order)}
      <h2>Thank you for your order :) </h2>
      <p>You ordered a {order.base} with:</p>
      <ul>
        {order.toppings[0].map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Order;
