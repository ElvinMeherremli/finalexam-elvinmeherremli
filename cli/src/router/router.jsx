import Add from "../pages/Add/Add";
import Cart from "../pages/Cart/Cart";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import LayoutPage from "../pages/LayoutPage";
import Wishlist from "../pages/Wishlist/Wishlist";

export const ROUTER = [
    {
        path: "",
        element: <LayoutPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'add',
            element: <Add />,
          },
          {
            path: 'detail/:id',
            element: <Detail />,
          },
          {
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'wish',
            element: <Wishlist />,
          },
        ],
      },
]