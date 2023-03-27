import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AboutBage from "../pages/AboutBage";
import ContactUsPage from "../pages/ContactUsPage";
import HomeBage from "../pages/HomeBage";
import ProjectPage from "../pages/projectPage";

export default function AppRoutes(){
return (
    <Routes>
        <Route path="/home" element={<HomeBage />} />
        <Route path="/about" element={<AboutBage/>} />
        <Route path="/project" element={<ProjectPage/>} />
        <Route path="/conactUs" element={<ContactUsPage/>} />
    </Routes>
)
}