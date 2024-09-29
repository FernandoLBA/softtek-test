import { Navigate, Route, Routes } from "react-router";

import { appPaths } from "../constants";
import { HomeRoute } from "../features/home";
import PlansRoute from "../features/plans/routes/PlansRoutes";
import { getDataFromLs } from "../utils";

export default function MainRouter() {
  const user = getDataFromLs("user");

  return (
    <Routes>
      <Route path={`${appPaths.HOME}/*`} element={<HomeRoute />} />

      {user ? (
        <Route path={`${appPaths.PLANS}/*`} element={<PlansRoute />} />
      ) : (
        <Route
          path={`${appPaths.PLANS}/*`}
          element={<Navigate to={`${appPaths.HOME}`} />}
        />
      )}
    </Routes>
  );
}
