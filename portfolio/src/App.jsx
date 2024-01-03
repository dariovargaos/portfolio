import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages and components
import RootLayout from "./layouts/RootLayout";
import AboutMe from "./pages/AboutMe";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<AboutMe />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
