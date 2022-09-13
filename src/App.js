import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <main className="m-0">
      {/* <Background /> */}
      <Header />
      <About />
      <Skills />
      <Stack />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
