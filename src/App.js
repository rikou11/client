import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";
import Layout from "./layout/Layout";
import CreatePostFormik from "./pages/CreatePostFormik";
import Post from "./pages/Post";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create" element={<CreatePostFormik />} />
          <Route path="post/:id/*" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
