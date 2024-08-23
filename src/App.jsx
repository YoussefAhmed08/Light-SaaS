import Companies from "./components/Companies";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Signing from "./components/Signing";
import Management from "./components/Management";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Companies />
      <Services />
      <Management />
      <Pricing />
      <Feedback />
      <Signing />
      <Footer />
    </div>
  );
};

export default App;
