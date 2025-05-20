import type { FormEvent } from "react";
import Button from "../../components/button";
import { login } from "./service";

interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login({
        email: event.target.email.value,
        password: event.target.password.value,
      });
      onLogin();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Log in to WallaReact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <Button type="submit" $variant="primary">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
