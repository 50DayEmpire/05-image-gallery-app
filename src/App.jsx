import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
}

export default App;
