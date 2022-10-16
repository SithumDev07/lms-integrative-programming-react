import "@fontsource/poppins";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Announcement from './pages/CreateAnnouncements';

import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Register/signup";
import Login from "./pages/Login";
import { TOASTIFY_ERROR_FONTS } from "./utils/constants";

import AnnouncementsMain from "./pages/Announcements";

import { store } from "./store";
import { logout, tokenSetter } from "./store/reducers/loginSlice";
import ProtectedRoute, {
  LecturerProtectedRoute,
  StudentProtectedRoute,
  SuperAdminProtectedRoute,
} from "./ProtectedRoute";
import Portal from "./pages/Portal";
import TeacherDashboard from "./pages/TeacherDashboard";
import Evaluate from "./pages/EditMarks";
import TeacherCourse from "./pages/TeacherCourse";


function App() {
  const isToastifyVisible = useSelector((state) => state.error.shouldShow);
  const toastifyMessage = useSelector((state) => state.error.message);
  const toastifyType = useSelector((state) => state.error.type);
  const toastifyAutoClose = useSelector((state) => state.error.autoClose);

  const toastStyles = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };

  useEffect(() => {
    if (isToastifyVisible)
      switch (toastifyType) {
        case TOASTIFY_ERROR_FONTS.ERROR:
          toast.error(toastifyMessage, {
            ...toastStyles,
            autoClose: toastifyAutoClose,
          });
          break;
        case TOASTIFY_ERROR_FONTS.WARNING:
          toast.warn(toastifyMessage, {
            ...toastStyles,
            autoClose: toastifyAutoClose,
          });
          break;
        case TOASTIFY_ERROR_FONTS.SUCCESS:
          toast.success(toastifyMessage, {
            ...toastStyles,
            autoClose: toastifyAutoClose,
          });
          break;
        default:
          break;
      }
  }, [isToastifyVisible, toastifyMessage, toastifyType]);

  // Setting token
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));

    console.log("Token is here");

    if (token) {
      store.dispatch(
        tokenSetter({
          isLoggedIn: true,
          accessToken: token,
        }),
      );
    } else {
      store.dispatch(logout({}));
    }
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {/* <StudentProtectedRoute> */}
                <Dashboard />
                {/* </StudentProtectedRoute> */}
              </ProtectedRoute>
            }
          />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseId" element={<Course />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/createannouncement" element={<Announcement />} />
          <Route path="/announcement" element={<AnnouncementsMain />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/teachdash" element={<TeacherDashboard />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/teachercourse" element={<TeacherCourse />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
