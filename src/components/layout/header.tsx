import Button from "../button";
import { logout } from "../../pages/auth/service";
import { useAuth } from "../../pages/auth/context";
import WallareactLogo from "../icons/wallareact-logo";

function Header() {
  const { isLogged, onLogout } = useAuth();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header>
      <div>
        <WallareactLogo />
      </div>
      <nav>
        {isLogged ? (
          <Button $variant="secondary" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
