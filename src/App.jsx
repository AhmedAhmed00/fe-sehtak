import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/layout/AppLayout";

import AuthProvider from "./context/AuthContext";
import ProtectedRoutes from "./features/authentication/ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import FullPageSpinner from "./ui/FullPageSpinner";

import Unauthorized from "./features/authentication/Unauthorized";

import Dash from "./features/dashboard/Dash";
import Hospital from "./pages/Hospital";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        <ReactQueryDevtools position="bottom-left" />
        <Suspense fallback={<FullPageSpinner />}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route element={<AppLayout />}>
                    <Route
                      index
                      element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<Dash />} />

                    {/* Hospital */}
                    <Route path="/hospital" element={<Hospital />} />

                    <Route path="/unauthorized" element={<Unauthorized />} />
                    <Route path="/invoices" element={<Unauthorized />} />
                    <Route path="/documents" element={<Unauthorized />} />
                  </Route>
                </Route>

                <Route path="*" element={<PageNotFound />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
