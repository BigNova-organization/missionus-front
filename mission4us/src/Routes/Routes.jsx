import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InnerContent from "./innerContents/InnerContent";
import Tabs from "../pages/Tabs/Tabs";
import Settings from "../pages/Parametre";
import Login from "../pages/Auth/Login";

import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";

import ProtectedRoutes from "./Protected/ProtectedRoutes";
import PublicRoutes from "./Public/PublicRoutes";
import PermissionDenied from "../components/Pages/WithoutPermission/PermissionDenied";
import Layout from "../scences/layout/index";
import Dashboard from "../pages/dashboard/dashboard";
import Users from "../pages/users";
import Gestion from "../pages/gestion";
import Blogs from "../pages/abonnement";
import Recruitment from "../pages/recruiment";
import Profile from "../pages/profile";
import Missions from "../pages/missions";
import PageCv from "../pages/PageCv";
import Abonnement from "../pages/abonnement";
import Parametre from "../pages/Parametre";
import Jobs from "../pages/Jobs";
import AddJob from "../pages/Jobs/fomAjout";
import UpdateJob from "../pages/Jobs/formModif";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}

    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="tabs"
            element={<Tabs props={{ userName: "BigNova web" }} />}
          >
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />
            <Route
              path="tab2"
              element={<ProtectedRoutes roleRequired="USER" />}
            >
              <Route path="/tabs/tab2" element={<Tab2 />} />
            </Route>
            <Route path="tab3" element={<Tab3 />} />
          </Route>
          <Route path="parametre" element={<Parametre />} />
          <Route path="users" element={<Users />} />
          <Route path="gestion" element={<Gestion />} />
          <Route path="abonnement" element={<Abonnement />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="Page Cv" element={<PageCv />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Jobs/Add Job" element={<AddJob/>} />
          <Route path="Jobs/Update Job" element={<UpdateJob/>} />

          
        </Route>
      </Route>
    </Route>

    {/** Public Routes */}
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>

    {/** Permission denied route */}
    <Route path="/denied" element={<PermissionDenied />} />
  </Routes>
);

export default MainRoutes;
