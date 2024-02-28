import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./layouts/MainLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { List } from "./features/orders/List";
import { DetailsLayout } from "./layouts/DetailsLayout";
import { useWindowSize } from "./hooks/useWindowSize";
import { DetailsDrawer } from "./features/order-details/DetailsDrawer";

function App() {
  const queryClient = new QueryClient();

  const windowSize = useWindowSize();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={windowSize > 768 ? <DetailsLayout /> : <DetailsDrawer />} />
      </Route>
    )
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
