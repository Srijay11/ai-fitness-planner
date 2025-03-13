import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateWorkout from './create-workout'
import Header from './components/custom/Header'
import {Toaster} from '@/components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewWorkout from './view-workout/[workoutId]'
import MyWorkouts from './my-workouts'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-workout',
    element:<CreateWorkout/>
  },
  {
    path:'/view-workout/:workoutId',
    element:<ViewWorkout/>
  },
  {
    path:'/my-workouts',
    element:<MyWorkouts/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='200269584390-mr3jt1hbv8oaet6ff9g2663t19ql1ioi.apps.googleusercontent.com'>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
