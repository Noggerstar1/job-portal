import { Outlet } from 'react-router-dom';
import {TopMenu} from "../components/menu/TopMenu.tsx";
import {Toaster} from "react-hot-toast";

export const Layout = () => {
    return (
        <>
            <TopMenu />
            <Toaster />
            <main className="mt-5">

                <Outlet />
            </main>

        </>
    );
};
