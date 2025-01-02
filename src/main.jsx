import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Signin from './components/Signin.jsx';

import Signup from './components/Signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';
// tanstack query import----------
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx';
// tanStack client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-lilac-seven.vercel.app/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-lilac-seven.vercel.app/coffee/${params.id}`)
      },
      {
        path: "signin",
        element: <Signin></Signin>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("https://coffee-store-server-lilac-seven.vercel.app/users")
      },
      {
        path:"users2",
        element:<Users2></Users2>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>



  </StrictMode>,
)
