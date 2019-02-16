import React, { Component } from "react"
import ReactChartkick, { AreaChart } from 'react-chartkick'
import ChartKick from 'chart.js'

import './Chart.css'


import api from '../services/Api'


export default class Chart extends Component {

    state = {
        visualizador: {}
    }

    async componentDidMount() {
        const response = await api.get(`/pageViews`)
        this.setState({ visualizador: response.data })
    }
 

    render() {
        let varl = { "2017-01-01 00:00:00 -0800": 2, "2017-01-01 00:01:00 -0800": 5 }
        let varial = this.state.visualizador.value
         console.log(varial)
        return (
            <React.Fragment>
                
                <AreaChart data={this.state.visualizador.values} />
            </React.Fragment>
        )
    }

}