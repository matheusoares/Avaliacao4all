import React, { Component, Fragment } from 'react'
import axios from 'axios'

import api from '../services/Api'

import './Chat.css'

const baseUrl = 'http://dev.4all.com:3050/messages'
let msgField 
export default class Chat extends Component {

    state = {mensagens: []}
   

    componentWillMount() {
        api.get(`/messages`).then(resp =>{
            this.setState({mensagens: resp.data})
        })
    }
    save(){
        let i = 0
        this.state.mensagens.map(msg => ( 
            i++
        ))
        i++
        const url = `${baseUrl}/`
        let content = {
            id: i,
            userName: "Eu",
            portrait: "orange",
            displayPortraitLeft: true,
            message: msgField,
            time: "1 min ago"
        }
        axios['post'](url, content)
    }
    updateField(event) {
        msgField = event.target.value
    }

    renderNewMessage(msg){
        let img
        return (
            <Fragment key={msg.message}>
                
                <div className="msg-container py-4 d-flex flex-column" >
                    <h4 className="msg-title">
                        {msg.userName} 
                        <small className="msg-time">{msg.time}</small>
                    </h4>
                    <div className="img-text d-flex align-items-center justify-content-start m-0">
                        <img src={`${msg.portrait}`} className={img = msg.displayPortraitLeft ? "img-left" : "img-right"} alt=""/>
                        <p className="msg-text">{msg.message}</p>
                    </div>   
                </div>
                <hr />
            </Fragment>
        )  
    }

    render() {
        const { mensagens } = this.state
        return (
            <div className="row m-0 mb-4 px-1 rounded">
                <div className="col-12 col-sm-11 mx-sm-auto">
                    <div className="row">
                        <div className="col-12 col-md-6 col-sm-10 py-4 bg-white">
                            <div className="chat-header">
                                <h3><i className="fa fa-comments"></i>  Chat</h3>
                            </div>
                            <hr className="m-0" />
                            <div className="chat-box" id="chatBox">
                            { mensagens.map(msg => ( 
                                this.renderNewMessage(msg)
                            ))} 
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Type your message here..."
                                     value={this.state.mensagens.message}  onChange={e => this.updateField(e)}></input>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="button" id="" onClick={() => this.save()}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
