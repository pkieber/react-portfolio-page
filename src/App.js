import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import './App.css';
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
        <Header />
        <LandingSection />
        <Footer />
    </ChakraProvider>
  );
}

export default App;
