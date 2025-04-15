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
import Hospital from "./pages/all-users/Hospital";
import Doctor from "./pages/all-users/Doctor";
import Scanner from "./pages/all-users/Scanner";
import Lab from "./pages/all-users/Lab";
import PhysicalTherapy from "./pages/all-users/PhysicalTherapy";
import SubSpecialization from "./pages/specializations/SubSpecializatoin";
import City from "./pages/locatoin/city";
import Region from "./pages/locatoin/Region";
import Orders from "./pages/orders/Orders";
import Clients from "./pages/Clients";
import FinanceByProviders from "./pages/finance/FinanceByProviders";
import LabCategories from "./pages/services/LabCategories";
import ServicesAdmin from "./pages/services/ServicesAdmin";
import Pending from "./pages/orders/Pending";
import ScanCategories from "./pages/services/ScanCategories";
import Mangement from "./pages/mangement/Mangement";
import Ads from "./pages/Ads";
import Providers from "./pages/all-users/Providers";
import Pharmacy from "./pages/all-users/Pharmacy";
import HospitalForm from "./features/all-users/hospital/HospitalForm";
import BranchForm from "./features/all-users/common/BranchForm";
import ServiceForm from "./features/all-users/common/ServiceForm";
import DoctorForm from "./features/all-users/doctor/DoctorForm";
import ScannerForm from "./features/all-users/scanner/ScannerForm";
import LabForm from "./features/all-users/lab/LabForm";
import PhysicalTherapyForm from "./features/all-users/physical-therapy/PhysicalTherapyForm";
import ProviderForm from "./features/all-users/providers/ProviderForm";
import PharmacyForm from "./features/all-users/pharmacy/PharmacyForm";
import Specialization from "./pages/specializations/specialization";
import FinanceByOrders from "./pages/finance/FinancyByOrders";

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

                    {/* service and branch */}
                    <Route
                      path="/all-users/:userType/branch-form/:userId"
                      element={<BranchForm />}
                    />
                    <Route
                      path="/all-users/:userType/service-form/:userId"
                      element={<ServiceForm />}
                    />

                    {/* Hospital */}
                    <Route path="/all-users/hospital" element={<Hospital />} />

                    <Route
                      path="/all-users/hospital/hospital-form"
                      element={<HospitalForm />}
                    />

                    {/* Doctor */}
                    <Route path="/all-users/doctor" element={<Doctor />} />
                    <Route
                      path="/all-users/doctor/doctor-form"
                      element={<DoctorForm />}
                    />

                    {/* Scanner */}
                    <Route path="/all-users/scanner" element={<Scanner />} />
                    <Route
                      path="/all-users/scanner/scanner-form"
                      element={<ScannerForm />}
                    />

                    {/* Lab */}
                    <Route path="/all-users/lab" element={<Lab />} />
                    <Route
                      path="/all-users/lab/lab-form"
                      element={<LabForm />}
                    />

                    <Route
                      path="/all-users/physical-therapy"
                      element={<PhysicalTherapy />}
                    />
                    <Route
                      path="/all-users/physical-therapy/physical-therapy-form"
                      element={<PhysicalTherapyForm />}
                    />
                    <Route path="/all-users/provider" element={<Providers />} />
                    <Route
                      path="/all-users/provider/provider-form"
                      element={<ProviderForm />}
                    />
                    <Route path="/all-users/pharmacy" element={<Pharmacy />} />
                    <Route
                      path="/all-users/pharmacy/pharmacy-form"
                      element={<PharmacyForm />}
                    />
                    {/* specalization */}
                    <Route
                      path="/specialization/specialization"
                      element={<Specialization />}
                    />
                    {/* sub  */}
                    <Route
                      path="/specialization/sub-specialization"
                      element={<SubSpecialization />}
                    />
                    {/* city */}
                    <Route path="/location/city" element={<City />} />

                    {/* Region */}
                    <Route path="/location/region" element={<Region />} />

                    {/* orders */}
                    <Route path="/orders/orders" element={<Orders />} />
                    <Route path="/orders/pending" element={<Pending />} />
                    {/* Clients */}
                    <Route path="/clients" element={<Clients />} />

                    {/* Services */}
                    <Route
                      path="/services/services-admin"
                      element={<ServicesAdmin />}
                    />
                    <Route
                      path="/services/lab-categories"
                      element={<LabCategories />}
                    />
                    <Route
                      path="/services/scan-categories"
                      element={<ScanCategories />}
                    />

                    {/* FinanceByProviders */}
                    <Route
                      path="/finance/by-providers"
                      element={<FinanceByProviders />}
                    />
                    {/* /finance/by-orders */}
                    <Route
                      path="/finance/by-orders"
                      element={<FinanceByOrders />}
                    />
                    {/* mangement  */}
                    <Route path="/management" element={<Mangement />}>
                      <Route path="branches" element={<div>branches</div>} />
                      <Route path="users" element={<div>users</div>} />
                    </Route>

                    {/* ads */}

                    <Route path="/ads" element={<Ads />} />

                    <Route path="/unauthorized" element={<Unauthorized />} />
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
