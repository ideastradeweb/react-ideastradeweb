import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// PAGES
import { About, Contact, Error, HomeLayout, LandingPage, Work } from './pages';




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ],
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App
