import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <ContactMe />
        <Projects />
      </Layout>
    </>
  );
}
