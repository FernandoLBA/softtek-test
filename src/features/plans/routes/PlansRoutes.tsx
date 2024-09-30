import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import { Loading } from "../../../components";
import { appPaths } from "../../../constants";

const PlansPage = React.lazy(() => import("../../plans/pages/plans/PlansPage"));
const ResumePage = React.lazy(
  () => import("../../plans/pages/resume/ResumePage")
);

export default function PlansRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/*" element={<PlansPage />} />

        <Route path={`/${appPaths.RESUME}`} element={<ResumePage />} />
      </Routes>
    </Suspense>
  );
}
