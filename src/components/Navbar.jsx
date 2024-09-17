import { Link } from "react-router-dom";
import { links } from "../utils/links";
import "../app.css";
import logo from "../assets/logo.jpeg";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo-sweet-delight" />
      <div className="links-container">
        {links.map((link) => (
          <Link to={link.route} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
