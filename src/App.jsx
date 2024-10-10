import About from "./components/About"
import Branding from "./components/Branding"
import ClientsReview from "./components/ClientsReview"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import OurClients from "./components/OurClients"
import OurWork from "./components/OurWork"

function App() {
  return (
    <div>
      <Navbar />
      <section id='home'>
        <Header />
      </section>
        <Intro />
      <section id="our-work">
        <OurWork />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="our-clients">
        <OurClients />
      </section>
      <section id="branding">
        <Branding />
      </section>
      <section id="clients-review">
        <ClientsReview />
      </section>
      <section id="lets-talk">
        <Footer />
      </section>
    </div>
  )
}

export default App
