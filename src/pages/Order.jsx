const Order = ({ order }) => {
  return (
    <div className="order container">
      {console.log(order)}
      <h2>Thank you for your order :) </h2>
      <p>You ordered a {order.base} with:</p>
      <ul>
        {order.toppings[0].map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
