import "@fontsource/poppins";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/Register/signup";
import { store } from './store';

function App() {

  const [toastify, setToastify] = useState(store.getState().error.shouldShow)

  useEffect(() => {
    if (toastify)
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [toastify])

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