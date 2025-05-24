import WallareactLogo from "../icons/wallareact-logo";
import AuthButton from "../../pages/auth/auth-button";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <Link to="/">
        <div>
          <WallareactLogo />
        </div>
      </Link>
      <nav>
        <Link to="/adverts/new">Publish new advert</Link>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;
