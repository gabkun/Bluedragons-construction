import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import OrganizationChart from "./pages/Team";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Future pages */}
            <Route path="/About" element={<About />} />
            <Route path="/Team" element={<OrganizationChart />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;