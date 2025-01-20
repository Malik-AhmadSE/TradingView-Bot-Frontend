import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Header } from "../components";
function HomeLayout() {
    return (
        <>
            <div className="bg-gray-50 w-full h-full py-10 flex flex-col justify-center items-center">
                <div className="mx-auto w-full max-w-7xl  px-6 lg:max-w-7xl lg:px-8">
                    <Header />
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-5 lg:grid-rows-2 w-full">
                        <div className="relative lg:row-span-full col-span-1 ">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden shadow-lg shadow-gray-300 rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <SideBar />
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeLayout;