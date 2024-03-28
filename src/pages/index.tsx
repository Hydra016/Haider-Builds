import React, { useState } from "react";
import Providers from "./providers";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import Splash from "@/components/Splash";
import { SlideFade } from "@chakra-ui/react";

export default function Home() {
  const notify = () => toast("Message sent");
  const [init, setInit] = useState(false);

  return (
    <Providers>
      <main
        suppressHydrationWarning
        className="bg-primary-clolor items-stretch min-h-screen overflow-hidden"
      >
        <ParticlesBackground setInit={setInit} id="particles" />
        {init ? (
          <SlideFade offsetY="20px" in={true}>
            {" "}
            <Landing setInit={setInit} />
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
          </SlideFade>
        ) : (
          <Splash />
        )}
      </main>
    </Providers>
  );
}
