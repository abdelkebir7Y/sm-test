import React from "react";
import { AppContextProvider } from "./contexts";
import { Home } from "./pages/home.page";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
