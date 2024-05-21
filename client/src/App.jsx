import { Outlet } from "react-router-dom";

import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
