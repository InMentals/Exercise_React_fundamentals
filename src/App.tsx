import AdvertsPage from "./pages/adverts/adverts-page";
import LoginPage from "./pages/auth/login-page";
import NewAdvertPage from "./pages/adverts/new-advert-page";
import { Navigate, Outlet, Route, Routes } from "react-router";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<Layout />}>
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<NewAdvertPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/not-found" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
