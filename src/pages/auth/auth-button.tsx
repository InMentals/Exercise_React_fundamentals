import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "./service";
import { Link } from "react-router";

function AuthButton() {
  const { isLogged, onLogout } = useAuth();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button
      $variant="secondary"
      onClick={handleLogoutClick}
      as={Link}
      to="/login"
    >
      Logout
    </Button>
  ) : (
    <Button $variant="primary" as={Link} to="/login">
      Login
    </Button>
  );
}

export default AuthButton;
