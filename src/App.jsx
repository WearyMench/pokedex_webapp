import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
