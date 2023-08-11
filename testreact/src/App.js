import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddTodo from "./Components/AddTodo";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/add-todo" element={<AddTodo/>} />
      </Routes>
    </>
  );
}

export default App;
