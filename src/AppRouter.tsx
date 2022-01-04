import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import LoaderPage from "./Components/LoaderPage/LoaderPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element name={path.substring(1)} />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
