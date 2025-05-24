import AdvertsPage from "./pages/adverts/adverts-page";
import LoginPage from "./pages/auth/login-page";
import NewAdvertPage from "./pages/adverts/new-advert-page";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<AdvertsPage />} />
      <Route path="/adverts/new" element={<NewAdvertPage />} />
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/not-found" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
