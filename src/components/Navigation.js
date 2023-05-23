import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="globalNav">
        <li>
          <Link to="/ReactPracticePart3/about">about</Link>
          <ul className="subMenu">
            <li>
              <Link to="/ReactPracticePart3/about/m1">menu1</Link>
            </li>
            <li>
              <Link to="/ReactPracticePart3/about/m2">menu2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/ReactPracticePart3/service">service</Link>
        </li>
        <li>
          <Link to="/ReactPracticePart3/product">product</Link>
        </li>
        <li>
          <Link to="/ReactPracticePart3/board">board</Link>
        </li>
      </ul>
      <ul className="registry">
        <li>
          <Link to="/ReactPracticePart3/login">login</Link>
        </li>
        <li>
          <Link to="/ReactPracticePart3/join">join</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
