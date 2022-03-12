import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom"
  import Signin from '../views/Signin'
  import Signup from '../views/Signup'
  import Home from "../views/Home"
  import Sell from "../views/Sell"
  import Detail from "../views/Details"
//   import Dashboard from '../views/Dashboard'
//   import Detail from '../views/Detail'
  
  export default function Navigation() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/productdetails/:adId" element={<Detail />} />

        </Routes>
      </BrowserRouter>
    )
  }
  