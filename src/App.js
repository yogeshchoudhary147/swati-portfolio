import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import { About } from './views/About';
import { Resume } from './views/Resume';
import { Projects } from './views/projects/Projects';
import RootLayout from './views/RootLayout';
import './assets/css/styles.css';
import NotFound from './views/NotFound';
import ProjectDetails, {
  projectDetailsLoader,
} from './views/projects/ProjectDetails';
import ProjectsError from './views/projects/ProjectsError';
import 'swiper/css';
import 'swiper/css/navigation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<About />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Outlet />}>
        <Route index element={<Projects />} />
        <Route
          path=":id"
          element={<ProjectDetails />}
          loader={projectDetailsLoader}
          errorElement={<ProjectsError />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
