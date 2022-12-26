
import { lazy } from 'react';
import GlobalLayout from './pages/_layout'

const Index = lazy(() => import('./pages/index'));
const ProductsIndex = lazy(() => import('./pages/products/index'));
const ProductsId = lazy(() => import('./pages/products/[id]'));
const CartIndex = lazy(() => import('./pages/cart/index'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index />, index: true},
      { path: '/products', element: <ProductsIndex />, index: true},
      { path: '/products/:id', element: <ProductsId />, },
      { path: '/cart', element: <CartIndex />, index: true},
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
  { route: '/cart' },
]
