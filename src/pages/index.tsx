import React from "react";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notify = () => toast("Message sent");

  return (
    <Providers>
      <main
        suppressHydrationWarning
        className="bg-primary-clolor items-stretch min-h-screen overflow-hidden"
      >
        <Fade triggerOnce cascade>
          <div className="h-screen flex flex-col justify-between">
            <Navbar />
            <Landing />
            <Skills />
          </div>
        </Fade>
        <Slide delay={5} triggerOnce>
          <Services />
        </Slide>
        <Slide triggerOnce direction="right">
          <Projects />
        </Slide>
        <Fade triggerOnce cascade>
          <Reviews />
        </Fade>
        <Fade triggerOnce cascade>
          <Contact notify={notify} />
          <Footer />
        </Fade>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          progressStyle={{
            background: "#A6A001",
          }}
        />
      </main>
    </Providers>
  );
}