import React, { PureComponent, Fragment } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './Chart.css'


import api from '../services/Api'


export default class Chart extends PureComponent {

    state = {
        visualizador: []
    }

    async componentDidMount() {
        const response = await api.get(`/pageViews`)
        this.setState({ visualizador: response.data })
    }
    render() {

        const { visualizador } = this.state
        return (
            <Fragment>
                <div className="row m-0 mb-4 px-1 rounded">
                    <div className="col-12 col-sm-11 py-4 mx-sm-auto bg-white">
                        <h1 className="h4 mx-md-5">Site Traffic Overview</h1>
                        <hr className="ml-md-5"/>
                        <ResponsiveContainer className="graphic">
                            <AreaChart data={visualizador} >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="month" />
                                <YAxis dataKey="views" />
                                <Tooltip />
                                <Area type="monotone" dataKey="views" stroke="#68BBFD" fill="#D0E7F9" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </Fragment>
        )
    }

}