import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import EventsPage from "./Pages/EventsPage/EventsPage";

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

function App() {

  const handleClick = (index) => {
    console.log(`Swiper slide clicked! Current slide index: ${index}`);
  };

  return (
    <RouterProvider router={router}>
      {/* This is a swiper inside a page, not for routing */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{ clickable: true }}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide onClick={() => handleClick(0)}>
          <LandingPage />
        </SwiperSlide>
        <SwiperSlide>
          <EventsPage />
        </SwiperSlide>
      </Swiper>
    </RouterProvider>
  );
}

export default App;

/*function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <LandingPage />,
    },
    {
      path : "/events/",
      element : <EventsPage />,
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;*/