import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Widgets from '../components/Widgets'
import Chart from '../components/Chart'

export default props =>
    <main className="main container-fluid">
        <div className="logo"></div>
        <header className="header">
            <h1>Dashboard</h1>
        </header>
        <section className="content">
            <Widgets />
            <Chart />
        </section>

    </main>