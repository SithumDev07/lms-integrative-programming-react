import "@fontsource/poppins";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/Register/signup";
import ProtectedRoute, { StudentProtectedRoute } from "./ProtectedRoute";
import { store } from './store'

function App() {
  useEffect(() => {
    toast("Hello");
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/dashboard" element={
              // <ProtectedRoute>
              // <StudentProtectedRoute>
              <Dashboard />
              // </StudentProtectedRoute>
              // </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </Provider >
  );
}

export default App;