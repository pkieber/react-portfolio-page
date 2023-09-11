import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import './App.css';
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <ChakraProvider>
        <Header />
        <LandingSection />
    </ChakraProvider>
  );
}

export default App;
