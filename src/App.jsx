import React from "react";
import Navbar from "./components/navbar/Navbar";
import './app.scss'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Add from "./pages/add/Add";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const MessageLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Message />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gigs',
        element: <Gigs />
      },
      {
        path: '/gig/:id',
        element: <Gig />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/mygigs',
        element: <MyGigs />
      },
      {
        path: '/add',
        element: <Add />
      },
      {
        path: '/messages',
        element: <Messages />
      },
    ]
  },
  {
    path: '/message/:id',
    element: <MessageLayout />
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
