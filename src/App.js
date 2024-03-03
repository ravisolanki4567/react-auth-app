import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute, MainPage } from "./routes";
import { Dashboard, Profile, About, PageNotFound } from "./pages";
import { Login, Register, ForgotPassword } from "./pages/Authtenticate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
