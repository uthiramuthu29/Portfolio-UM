import { ThemeProvider } from "./context/ThemeProvider.jsx";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import BookShelf from "./pages/BookShelf";
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Projects />,
      },
      {
        path: "/stack",
        element: <TechStack />,
      },
      {
        path: "/books",
        element: <BookShelf />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
