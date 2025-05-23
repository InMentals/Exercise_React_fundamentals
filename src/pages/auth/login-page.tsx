import { useState, type FormEvent, type ChangeEvent } from "react";
import Button from "../../components/ui/button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/ui/form-field";

function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const isDisabled = !email || !password;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login(credentials);
      onLogin();
    } catch (error) {
      console.error(error);
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
        <Button type="submit" $variant="primary" disabled={isDisabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
