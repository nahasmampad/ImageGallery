import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import LoggedInRoutes from "./Routes/LogedIn";
import NotLoggedInRoutes from "./Routes/LogedOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LoggedInRoutes/>}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<NotLoggedInRoutes/>}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
