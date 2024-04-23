import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Home from "../components/mainComponents/Home";
import About from "../components/mainComponents/About";
import Team from "../components/mainComponents/Team";
import Association from "../components/mainComponents/Association";
import Faq from "../components/mainComponents/Faq";
import Join from "../components/mainComponents/Join";
import Blogs from "../components/mainComponents/Blogs";
import Docs from "../components/mainComponents/Docs";
import Community from "../components/mainComponents/Community";
import Roadmap from "../components/mainComponents/Roadmap";
import Volastore from "../components/mainComponents/Volastore";

const Main = () => {
  return (
    <Layout title={"Volaverse"} style={{ overflow: "hidden" }}>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="volastore">
        <Volastore />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="association">
        <Association />
      </section>

      <section id="docs">
        <Docs />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="community">
        <Community />
      </section>

      <section id="join">
        <Join />
      </section>
    </Layout>
  );
};

export default Main;
