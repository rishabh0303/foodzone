import FoodZoneLogo from "../Images/Food Zone Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodZoneLogo}
      alt="Food Zone Logo"
      title="Food Zone Logo"
    />
  </a>
);

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
