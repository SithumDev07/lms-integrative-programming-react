import "@fontsource/poppins";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/Register/signup";
import { store } from './store';

function App() {

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