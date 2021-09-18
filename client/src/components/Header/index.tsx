import React from "react";

import { ShoppingCartIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className="bg-purple-400 py-2 px-10 flex items-center justify-between">
            <div className="flex items-center">
                <div className="hover:bg-purple-300 px-4 flex items-center">
                    <LocationMarkerIcon className="h-10" />
                    <p className="ml-2 w-20">Ingresa tu ubicación</p>
                </div>
                <div className="ml-4 flex gap-4" >
                    <p>Vender</p>
                    <p>Ayuda / PQR</p>
                </div>
            </div>
            <div className="flex gap-4">
                <p>Crea tu cuenta</p>
                <p>Ingresa</p>
                <ShoppingCartIcon className="h-6" />
            </div>
        </header>
    )
}

export default Header;