import React from "react";
import { ApiProvider } from "./api";
import { AppContextProvider } from "./contexts";
import { Home } from "./pages/home.page";

function App() {
  return (
    <ApiProvider>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </ApiProvider>
  );
}

export default App;
