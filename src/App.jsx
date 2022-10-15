import "@fontsource/poppins";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/Register/signup";
import { TOASTIFY_ERROR_FONTS } from "./utils/constants";
import Announcement from './pages/Announcements'
import ProtectedRoute, { LecturerProtectedRoute, StudentProtectedRoute } from './ProtectedRoute'
import Courses from './pages/Courses'
import Course from './pages/Course'
import NotFound from './pages/NotFound'

function App() {

  const isToastifyVisible = useSelector((state) => state.error.shouldShow)
  const toastifyMessage = useSelector(state => state.error.message)
  const toastifyType = useSelector((state) => state.error.type)
  const toastifyAutoClose = useSelector((state) => state.error.autoClose)

  const toastStyles = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  }

  useEffect(() => {
    if (isToastifyVisible)
      switch (toastifyType) {
        case TOASTIFY_ERROR_FONTS.ERROR:
          toast.error(toastifyMessage, { ...toastStyles, autoClose: toastifyAutoClose });
          break;
        case TOASTIFY_ERROR_FONTS.WARNING:
          toast.warn(toastifyMessage, { ...toastStyles, autoClose: toastifyAutoClose });
          break;
        case TOASTIFY_ERROR_FONTS.SUCCESS:
          toast.success(toastifyMessage, { ...toastStyles, autoClose: toastifyAutoClose });
          break;
        default:
          break;
      }

  }, [isToastifyVisible, toastifyMessage, toastifyType])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={
            //<ProtectedRoute>
            //<StudentProtectedRoute>
            <Dashboard />
            //</Routes></StudentProtectedRoute>
            //</ProtectedRoute>
          } />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseId" element={<Course />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div >
  );
}

export default App;