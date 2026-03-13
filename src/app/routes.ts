import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { ScheduleViewingPage } from "./pages/ScheduleViewingPage";
import { PropertyDetailPage } from "./pages/PropertyDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/properties",
    Component: PropertiesPage,
  },
  {
    path: "/properties/:id",
    Component: PropertyDetailPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/leadership",
    Component: LeadershipPage,
  },
  {
    path: "/schedule-viewing",
    Component: ScheduleViewingPage,
  },
]);
