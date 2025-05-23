import WallareactLogo from "../icons/wallareact-logo";
import AuthButton from "../../pages/auth/auth-button";

function Header() {
  return (
    <header>
      <div>
        <WallareactLogo />
      </div>
      <nav>
        <AuthButton />
      </nav>
    </header>
  );
}

export default Header;
