import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import LoginForm from "./routes/Login";
import Karyawan from "./routes/karyawan";
import AddKaryawan from "./routes/addKaryawan";

function App() {
    const router = createBrowserRouter([
            {
              path: "/",
              element: <LoginForm />,
            },
            {
              path: "/",
              element: <Layout />,
              children: [
                {
                  path: "home",
                  element: <DashboardPage />,
                },
                {
                  path: "karyawan",
                  element: <Karyawan/>,
                },
                {
                  path: "new-karyawan",
                  element: <AddKaryawan/>,
                },
                {
                  path: "kriteria",
                  element: <Karyawan/>,
                },
                {
                  path: "sub-kriteria",
                  element: <Karyawan/>,
                },
                {
                  path: "alternatif",
                  element: <Karyawan/>,
                },
                {
                  path: "analytics",
                  element: <h1 className="title">Analytics</h1>,
                },
                {
                  path: "reports",
                  element: <h1 className="title">Reports</h1>,
                },
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
