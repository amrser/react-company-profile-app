import { Fragment } from "react";
import Nav from "../component/Nav";

import AppRoutes from "../Routes/AppRoutes";

export default function Layout(){
    return <Fragment>
        <Nav/>
        <AppRoutes/>
        <footer>
         <div className="copyright">
            Copyright 2022 . All Rights Reserved.
         </div>
        </footer>
    </Fragment>
}