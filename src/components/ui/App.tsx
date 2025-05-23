import LoginPage from "./pages/auth/login-page";
import TweetsPage from "./pages/tweets/tweets-page";
import { useAuth } from "./pages/auth/context";
import NewTweetPage from "./pages/tweets/new-tweet-page";

function App() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <TweetsPage />
      <NewTweetPage />
    </>
  ) : (
    <LoginPage />
  );
}

export default App;
