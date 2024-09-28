import React from "react";

import MainRouter from "./routes/MainRouter";
import { MainLayout } from "./layouts";

function App(): React.JSX.Element {
  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  );
}

export default App;
