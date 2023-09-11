import { Alert, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import './App.css';
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <ChakraProvider>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <Footer />
        <Alert />
    </ChakraProvider>
  );
}

export default App;
