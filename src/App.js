import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import GptSearchPage from "./components/GptSearchPage";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import MoviePage from "./components/MoviePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Login /> },
        { path: "browse", element: <Browse /> },
        { path: "ai", element: <GptSearchPage /> },
        { path: "movie/:movieId", element: <MoviePage /> },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
