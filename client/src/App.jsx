import { Outlet } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollUp from "./components/common/ScrollUp";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
