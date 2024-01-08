import React from "react"
const Init = () => {
    return (
        <div className="flex flex-col items-center bg-fuchsia-100 h-screen w-full">
                <h1 className="text-bg-slate-500 font-semibold text-7xl mt-16">!Bienvenidos¡</h1>
                <img
                    className="h-40 w-100 object-cover block float-center mt-12"
                    src="/foto.png"
                />
                <h1 className="text-bg-slate-500 font-semibold text-3xl mt-12">TELEMETRÍA Y SISTEMAS CIBERFÍSICOS</h1>
                <h1 className="text-bg-slate-500 font-semibold text-2xl mt-14">Sistema de monitoreo y control de flujo de agua en el laboratorio de Sistemas Telemáticos</h1>
        </div>
    )
}
export default Init