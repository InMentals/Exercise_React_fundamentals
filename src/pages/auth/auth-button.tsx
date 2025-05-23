import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "./service";

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
    <Button $variant="primary">Login</Button>
  );
}

export default AuthButton;
