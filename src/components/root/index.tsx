import React, { ReactNode } from "react";
import HeaderBar from "src/elements/header";

/**
 * Loads the <HeaderBar> component regardless of the loaded section
 */
const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderBar />
      <main className="page-container">{children}</main>
    </>
  );
};

export default App;
