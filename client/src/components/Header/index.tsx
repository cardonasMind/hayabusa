import React from "react";

import { ShoppingCartIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className="bg-gray-200 py-4 px-10 flex">
            <div className="hover:bg-gray-100 px-4 flex items-center">
                <LocationMarkerIcon className="h-6" />
                <p>Ingresa tu ubicación</p>
            </div>
            <div className="flex gap-4" >
                <p>Vender</p>
                <p>Ayuda / PQR</p>
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