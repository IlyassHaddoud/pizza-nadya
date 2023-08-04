import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <h1>Welcome to Pizza Nadya</h1>
      <button>
        <Link to="/base">Make Your Pizza</Link>
      </button>
    </div>
  );
};

export default Home;
