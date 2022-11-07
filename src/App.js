import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FetchUsers from "./FetchUsers";
import Inventory from "./Inventory";
import Error from "./Error";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorBoundary";

import "./index.css";

function App() {
  const [explode, setExplode] = React.useState(false);
  return (
    <section className="home">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        {...{ explode }}
      >
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users" element={<FetchUsers />} />

            <Route path="/contact" element={<Inventory />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      </ErrorBoundary>
    </section>
  );
}

export default App;
