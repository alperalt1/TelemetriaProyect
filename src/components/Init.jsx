import React from "react"
import fot1 from '../assets/foto.png';

const Init = () => {
    return (
        <div className="flex flex-col content-center items-center w-full bg-sky-100">
                <h1 className="text-bg-slate-500 font-semibold text-7xl mt-16">!Bienvenidos¡</h1>
                <img
                    className="h-40 w-100 object-cover block float-center mt-12"
                    src={fot1}
                />
                <h1 className="text-bg-slate-500 font-semibold text-3xl mt-12">TELEMETRÍA Y SISTEMAS CIBERFÍSICOS</h1>
                <h1 className="text-bg-slate-500 font-semibold text-2xl mt-14">Sistema de monitoreo y control de flujo de agua en el laboratorio de Sistemas Telemáticos</h1>
        </div>
    )
}
export default Init