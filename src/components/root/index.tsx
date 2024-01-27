import React, { ReactNode } from "react";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="page-container">{children}</main>
    </>
  );
};

export default App;
