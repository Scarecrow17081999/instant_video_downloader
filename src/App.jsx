import React from "react";
import Home from "./pages/HomePage";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import Header from "./components/common/Header";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
