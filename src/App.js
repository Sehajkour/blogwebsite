import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./pages/SingleBlog";

function App() {
    useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const hash = url.hash;

    if (hash) {
      const id = hash.slice(1);
      const element = document.getElementById(id);
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }


  },[])

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<SingleBlog />} />
    </Routes>
  );
}

export default App;
