import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EventsPage from "./Pages/EventsPage/EventsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/events",
      element: <EventsPage />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;