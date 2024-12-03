import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PageLoaderV2 } from '../Components/PageLoaderV2'
import { AnimationLayout } from '../Components/LoaderPage/components/AnimationLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoaderV2 />}>
        <Routes>
          <Route element={<AnimationLayout />}>
            {/*<Route path='*' element={<PageLoaderV2 />} />*/}
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element name={path.substring(1)} />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
