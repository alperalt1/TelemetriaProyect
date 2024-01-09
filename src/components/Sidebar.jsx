import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SiRelay } from "react-icons/si";
import { GiValve } from "react-icons/gi";
import { WiRaindrop } from "react-icons/wi";
import { FaGlassWhiskey } from "react-icons/fa";

const Sidebar = () => {
    const data = [
        {
            name: 'Lunes',
            Litros: 120,
        },
        {
            name: 'Martes',
            Litros: 320,
        },
        {
            name: 'Miércoles',
            Litros: 80,
        },
        {
            name: 'Jueves',
            Litros: 230,
        },
        {
            name: 'Viernes',
            Litros: 10,

        },
    ];
    const datamonth = [
        {
            name: 'Enero',
            Litros: 620,
        },
        {
            name: 'Febrero',
            Litros: 720,
        },
        {
            name: 'Marzo',
            Litros: 880,
        },
        {
            name: 'Abril',
            Litros: 530,
        },
        {
            name: 'Mayo',
            Litros: 970,

        },
        {
            name: 'Junio',
            Litros: 620,
        },
        {
            name: 'Julio',
            Litros: 320,
        },
        {
            name: 'Agosto',
            Litros: 580,
        },
        {
            name: 'Septiembre',
            Litros: 630,
        },
        {
            name: 'Octubre',
            Litros: 490,

        },
        {
            name: 'Noviembre',
            Litros: 680,
        },
        {
            name: 'Diciembre',
            Litros: 700,

        },
    ];
    return (
        <div className={`flex flex-col content-center items-center w-full bg-sky-100`} >
            <h1 className="text-bg-slate-500 font-semibold text-7xl mt-2 mb-14">Dashboard</h1>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Estado Relay</h3>
                        <SiRelay />
                    </div>
                    <h1>Abierto</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Estado Valvula</h3>
                        <GiValve />
                    </div>
                    <h1>Abierto</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Límite</h3>
                        <WiRaindrop />
                    </div>
                    <h1>2.56</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Litros de Agua</h3>
                        <FaGlassWhiskey />
                    </div>
                    <h1>42</h1>
                </div>
            </div>
            <ResponsiveContainer width="71%" height="30%">
                <BarChart
                    width={500}
                    height={300}
                    data={datamonth}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Litros" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />

                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="50%" height="30%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 60,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Litros" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>


        </div>
    )
}

export default Sidebar