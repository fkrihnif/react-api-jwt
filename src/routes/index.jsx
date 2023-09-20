//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
import Home from "../views/home.jsx";

//import view auth register
import Register from "../views/auth/register.jsx";

//import view auth login
import Login from "../views/auth/login.jsx";

//import view posts index
import PostIndex from "../views/posts/index.jsx";

//import view post create
import PostCreate from "../views/posts/create.jsx";

//import view post edit
import PostEdit from "../views/posts/edit.jsx";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route path="/register" element={<Register />} />

      {/* route "/login" */}
      <Route path="/login" element={<Login />} />

      {/* route "/posts" */}
      <Route path="/posts" element={<PostIndex />} />

      {/* route "/posts/create" */}
      <Route path="/posts/create" element={<PostCreate />} />

      {/* route "/posts/edit/:id" */}
      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  );
}

export default RoutesIndex;
