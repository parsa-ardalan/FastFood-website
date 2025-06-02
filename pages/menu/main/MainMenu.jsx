import { useState } from "react"
import Header from "@/pages/components/header/Header";
import MenuPage from "./MenuPage";

export default function Items() {

    return (

        <div className="h-screen">

            <Header />
            <MenuPage/>
        </div>
    )
}