import NavBar from "@/scenes/navbar";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Benefits />

      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
