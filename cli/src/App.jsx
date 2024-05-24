import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ROUTER } from './router/router'
import { BsketContextProvider } from './context/BasketContext'
import { WishlistContextProvider } from './context/WishlistContext'
const router = createBrowserRouter(ROUTER)
function App() {

  return (
    <>
      <BsketContextProvider>
        <WishlistContextProvider>
          <RouterProvider router={router} />
        </WishlistContextProvider>
      </BsketContextProvider>
    </>
  )
}

export default App
