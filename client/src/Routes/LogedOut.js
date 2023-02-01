import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate,Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie'


export default function NotLoggedInRoutes() {
  const { email } = useContext(UserContext);
  const navigate = useNavigate()
  const user = Cookies.get('user')

  if (user) {
    return <Navigate to="/" />
  } else {
    return <Outlet />
  }
}
