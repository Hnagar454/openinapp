import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { HiOutlineCash } from 'react-icons/hi'
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';




function Home() {
    const [data, setdata]=useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    },[])
   

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards '>
                <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-inner'>
                        < HiOutlineCash className='card_icon' />
                        <p style={{ color: "black", margin: "10px" }}>Total Revenue</p>
                        <h2>$2,215.149</h2>
                    </div>
                </div>
                <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-inner'>
                        < HiOutlineCash className='card_icon' />
                        <p style={{ color: "black", margin: "10px" }}>Total Transaction</p>
                        <h2>$2,215.149</h2>
                    </div>
                </div>
                <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-inner'>
                        < HiOutlineCash className='card_icon' />
                        <p style={{ color: "black", margin: "10px" }}>Total Likes</p>
                        <h2>$2,215.149</h2>
                    </div>
                </div>
                <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-inner'>
                        < HiOutlineCash className='card_icon' />
                        <p style={{ color: "black", margin: "10px" }}>Total Users</p>
                        <h2>$2,215.149</h2>
                    </div>
                </div>
            </div>
            <div className='charts'>

                <BarChart width={1200} height={300}>
                    <XAxis dataKey="uv" />
                    <YAxis dataKey={"pv"} />
                    <Bar dataKey="uv" barSize={30} fill="#8884d8" />
                    <Bar dataKey="pv" barSize={30} fill="#8884d8"
                    />
                </BarChart>
            </div>

            <div className='main-cardsbottom'>
                <div className='cardbottom shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-innerbottom'>
                        <h1> Top products</h1>

                        <PieChart style={{ width: "200px" }}
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                        />;



                    </div>
                </div>
                <div className='cardbottom shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='card-innerbottom'>


                        <h1 style={{ textAlign: "center", justifyContent: "center" }}> Add Users</h1>



                    </div>
                </div>

            </div>

        </main >
    )
}

export default Home