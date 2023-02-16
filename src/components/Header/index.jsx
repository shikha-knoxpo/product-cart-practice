import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/product">Product</Link>
      <Link to="/cart">Cart</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
