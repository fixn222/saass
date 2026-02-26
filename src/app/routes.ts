import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { CountrySelection } from "./pages/CountrySelection";
import { AIAssistant } from "./pages/AIAssistant";
import { ClientDashboard } from "./pages/ClientDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/countries",
    Component: CountrySelection,
  },
  {
    path: "/ai-assistant",
    Component: AIAssistant,
  },
  {
    path: "/client-dashboard",
    Component: ClientDashboard,
  },
  {
    path: "/admin-dashboard",
    Component: AdminDashboard,
  },
]);
