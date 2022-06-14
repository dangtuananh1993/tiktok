/** @format */

import routeConfig from "~/config/routes";

// Layouts
import { HeaderOnly } from "~/component/Layout";

// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// public routes
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.search, component: Search, layout: null },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
