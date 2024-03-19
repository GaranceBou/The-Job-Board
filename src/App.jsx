import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Jobs from "./components/jobs";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
