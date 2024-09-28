import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { Loading } from "../../../components";

const PlansPage = React.lazy(() => import("../pages/PlansPage"));

export function PlansRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<PlansPage />} />

          <Route path="/hola" element={<>Hola</>} />
      </Routes>
    </Suspense>
  );
}
