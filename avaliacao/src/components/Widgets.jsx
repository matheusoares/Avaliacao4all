import React, { Component } from "react"
import './Widgets.css'
import 'font-awesome/css/font-awesome.min.css'
import Numeral from 'react-pretty-numbers'

import api from '../services/Api'

export default class Widgets extends Component {

    state = {
        widgets: {}
    }
    

    async componentDidMount() {
        const response = await api.get(`/widgets`)
        this.setState({ ...response.data })
    }

    render() {

        let rpn = { shortFormat: true };
        return (
            <div className="row m-0 px-1 py-5 d-flex justify-content-around">
                <div className="col-12 col-sm-5 col-lg-2 mb-4">
                    <div className="row">
                        <div className="col-sm-5 col-12 bg-primary widget-icon-side">
                            <i className="fa fa-shopping-bag"></i>
                        </div>
                        <div className="col-sm-7 col-12 bg-white widget-info-side align-items-center align-items-sm-start">
                            <h2><Numeral params={rpn}>{this.state.newOrders}</Numeral></h2>
                            <p>New orders</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5 col-lg-2 mb-4">
                    <div className="row">
                        <div className="col-sm-5 col-12 bg-warning widget-icon-side">
                            <i className="fa fa-comment"></i>
                        </div>
                        <div className="col-sm-7 col-12 bg-white widget-info-side align-items-center align-items-sm-start">
                            <h2><Numeral params={rpn}>{this.state.comments}</Numeral></h2>
                            <p>Comments</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5 col-lg-2 mb-4">
                    <div className="row">
                        <div className="col-sm-5 col-12 bg-info widget-icon-side">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="col-sm-7 col-12 bg-white widget-info-side align-items-center align-items-sm-start">
                            <h2><Numeral params={rpn}>{this.state.newUsers}</Numeral></h2>
                            <p>New Users</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5 col-lg-2 mb-4">
                    <div className="row">
                        <div className="col-sm-5 col-12 bg-danger widget-icon-side">
                            <i className="fa fa-newspaper-o"></i>
                        </div>
                        <div className="col-sm-7 col-12 bg-white widget-info-side align-items-center align-items-sm-start">
                            <h2><Numeral params={rpn}>{this.state.pageViews}</Numeral></h2>
                            <p>Page Views</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}