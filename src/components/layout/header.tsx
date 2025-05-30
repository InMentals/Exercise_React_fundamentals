import "./header.css";
import logo from "../../assets/logo-wallareact.svg";
import AuthButton from "../../pages/auth/auth-button";
import { Link } from "react-router";
import LinkButton from "../ui/link-button";

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" className="logoImg" />
        <h1>WallaReact</h1>
      </Link>
      <nav className="nav">
        <LinkButton $variant="primary" to="/adverts/new">
          Publish new advert
        </LinkButton>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;
