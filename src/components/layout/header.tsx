import "./header.css";
import logo from "../../assets/logo-wallareact.svg";
import AuthButton from "../../pages/auth/auth-button";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="" className="logoImg" />
        <h1>WallaReact</h1>
      </Link>
      <nav className="nav">
        <Link to="/adverts/new">Publish new advert</Link>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;
