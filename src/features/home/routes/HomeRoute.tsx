import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { Loading } from "../../../components";

const HomePage = React.lazy(() => import("../pages/HomePage"));

export default function HomeRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />;
      </Routes>
    </Suspense>
  );
}
