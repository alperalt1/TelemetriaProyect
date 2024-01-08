import React from 'react'
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="errorpage mx-auto flex flex-col items-center bg-fuchsia-100 w-screen h-screen">
            <h1 className="text-bg-slate-500 font-semibold text-7xl mt-16">¡Oops!</h1>
            <h1 className="text-bg-slate-500 font-semibold text-2xl mt-16">404 - Pagina no Encontrada</h1>
            <Link to="/" className={`text-base font-medium`}>
                <h1 className="text-bg-slate-500 font-semibold text-2xl mt-16">Regresar a la Pagina de Inicio</h1>
            </Link>
        </div>
    )
}

export default ErrorPage