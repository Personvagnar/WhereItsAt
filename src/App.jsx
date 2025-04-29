import { useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import CartPage from "./Pages/CartPage/CartPage";
import useConcertStore from "./Stores/ConcertStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/events/",
    element: <EventsPage />,
  },
  {
    path: "/cart/",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <section className="pagenotfound">Page Not Found</section>,
  }
]);

function App() {
  const { fetchEvents, isLoading, error } = useConcertStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;