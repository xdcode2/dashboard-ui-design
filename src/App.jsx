import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import ProtectedRoute from "@/routes/ProtectedRoute"; // ✅ Import
import DashboardPage from "@/routes/dashboard/page";
import BillingPage from "@/routes/billing/page";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";

function App() {
    const router = createBrowserRouter([
        // ✅ Auth routes (public)
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/login",
            element: <Login />,
        },

        // ✅ Protected routes (dashboard, etc.)
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "analytics", element: <h1 className="title">Analytics</h1> },
                { path: "reports", element: <h1 className="title">Reports</h1> },
                { path: "customers", element: <h1 className="title">Customers</h1> },
                { path: "new-customer", element: <h1 className="title">New Customer</h1> },
                { path: "verified-customers", element: <h1 className="title">Verified Customers</h1> },
                { path: "products", element: <h1 className="title">Products</h1> },
                { path: "new-product", element: <h1 className="title">New Product</h1> },
                { path: "inventory", element: <h1 className="title">Inventory</h1> },
                {
                    path: "billing",
                    element: <BillingPage />,
                },

        { path: "settings", element: <h1 className="title">Settings</h1> },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
