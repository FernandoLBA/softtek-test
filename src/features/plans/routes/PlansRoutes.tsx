import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { Loading } from "../../../components";
import { appPaths } from "../../../constants";
import { ForMePage } from "../pages";

const PlansPage = React.lazy(() => import("../pages/PlansPage"));

export function PlansRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<PlansPage />} />

        <Route path={appPaths.FOR_ME} element={<ForMePage />} />
      </Routes>
    </Suspense>
  );
}
