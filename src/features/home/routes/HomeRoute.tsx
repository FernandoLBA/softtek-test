import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { appPaths } from "../../../constants";
import { Loading } from "../../../components";

const HomePage = React.lazy(() => import("../pages/HomePage"));

export function HomeRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={appPaths.HOME} element={<HomePage />} />;
      </Routes>
    </Suspense>
  );
}
