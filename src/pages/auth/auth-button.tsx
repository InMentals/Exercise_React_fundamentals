import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "./service";
import { Link } from "react-router";

//TODO: review auth-button. Its really primary and secondary necessary? Then, when do we need to render each?

function AuthButton() {
  const { isLogged, onLogout } = useAuth();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button $variant="secondary" onClick={handleLogoutClick}>
      Logout
    </Button>
  ) : (
    <Button $variant="primary" as={Link} to="/login">
      Login
    </Button>
  );
}

export default AuthButton;
