import { useState, type FormEvent, type ChangeEvent } from "react";
import Button from "../../components/ui/button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/ui/form-field";
import { useNavigate, useLocation } from "react-router";
import { AxiosError } from "axios";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { email, password } = credentials;
  const isDisabled = !email || !password || isFetching;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  function handleRememberMe(event: ChangeEvent<HTMLInputElement>) {
    setRememberMe(event.target.checked);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsFetching(true);
      await login(credentials, rememberMe);
      onLogin();
      const to = location.state?.from ?? "/";
      navigate(to, { replace: true });
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError({
          message: error.response?.data?.message ?? error.message ?? "",
        });
        //TODO: do we want to hanlde loadig state? (class 4, 3:42 min)
      }
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div>
      <h1>Log in to WallaReact</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <Button type="submit" $variant="primary" disabled={isDisabled}>
          Log in
        </Button>
      </form>
      {error && (
        <div
          role="alert"
          onClick={() => {
            setError(null);
          }}
        >
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
