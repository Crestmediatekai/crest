import About from "./components/About"
import Branding from "./components/Branding"
import ClientsReview from "./components/ClientsReview"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import OurClients from "./components/OurClients"
import OurWork from "./components/OurWork"

function App() {

  return (
    <div>
      <Header />
      <Intro />
      <OurWork />
      <About />
      <OurClients />
      <Branding />
      <ClientsReview />
      <Footer />
    </div>
  )
}

export default App
