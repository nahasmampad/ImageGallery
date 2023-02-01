import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie'
import Login from "../pages/Login";



export default function LoggedInRoutes() {
  console.log("logeed");
  const navigate = useNavigate()
  const user = Cookies.get('user')
  const {email} = useContext(UserContext)
  

 if(user){
  return <Outlet /> 
 }else{
  return <Login />
 }
  
}
