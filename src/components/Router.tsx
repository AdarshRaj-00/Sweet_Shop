import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Import pages
import Layout from '@/components/Layout';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ProfilePage from '@/components/pages/ProfilePage';

// Main layout with WixServicesProvider
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Layout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "profile",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to view your profile">
            <ProfilePage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "store",
        element: (
          <div className="w-full bg-primary">
            <div className="max-w-[120rem] mx-auto px-6 py-12">
              <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-8 text-center">
                Our Collection
              </h1>
              <div className="w-full">
                <StoreCollectionRoute productPageRoute="/products" />
              </div>
            </div>
          </div>
        ),
        loader: defaultStoreCollectionRouteRedirectLoader,
      },
      {
        path: "store/:categorySlug",
        element: (
          <div className="w-full bg-primary">
            <div className="max-w-[120rem] mx-auto px-6 py-12">
              <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-8 text-center">
                Our Collection
              </h1>
              <div className="w-full">
                <StoreCollectionRoute productPageRoute="/products" />
              </div>
            </div>
          </div>
        ),
        loader: storeCollectionRouteLoader,
      },
      {
        path: "products/:slug",
        element: (
          <div className="w-full bg-primary">
            <div className="max-w-[120rem] mx-auto px-6 py-12">
              <ProductDetailsRoute />
            </div>
          </div>
        ),
        loader: productRouteLoader,
      },
      {
        path: "cart",
        element: (
          <div className="w-full bg-primary">
            <div className="max-w-[120rem] mx-auto px-6 py-12">
              <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-8 text-center">
                Your Cart
              </h1>
              <div className="w-full">
                <Cart />
              </div>
            </div>
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
