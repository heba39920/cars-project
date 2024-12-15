

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Cars from './components/Cars/Cars'
import CarDetails from './components/CarDetails/CarDetails'


function App() {


 let routes = createBrowserRouter([{path:"/", element: <MasterLayout />,
  children:[ {index: true , element: <Home/>},
  {path:"home", element: <Home/>},
 {path:"cars", element: <Cars/> } ,
  {path:"carsDetails", element: <CarDetails/>}
]
 }])

 return <RouterProvider router={routes}/>
}

export default App
