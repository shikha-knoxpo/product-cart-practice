import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";

const routes = () => [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
