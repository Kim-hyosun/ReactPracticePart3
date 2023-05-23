import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="globalNav">
        <li>
          <Link to="/about">about</Link>
          <ul className="subMenu">
            <li>
              <Link to="/about/m1">menu1</Link>
            </li>
            <li>
              <Link to="/about/m2">menu2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/service">service</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/board">board</Link>
        </li>
      </ul>
      <ul className="registry">
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/join">join</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
