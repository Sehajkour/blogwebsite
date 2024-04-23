import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "../../styles/layout.css";
import UI from "./UI";

const Layout = ({ children, title, description, keywords, author }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className={`${isScrolled ? "header-ht" : ""}`}></div>
      <Header />

      <main className="layout">
        <UI />
        <div className="child">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Volaverse",
  description: "",
  keywords: "",
  author: "",
};

export default Layout;
