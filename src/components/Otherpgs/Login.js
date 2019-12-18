import React from "react"
import ReactDOM from "react-dom"
import WorkerForm from './WorkerForm.js'
import CustomerForm from './CustomerForm.js'
import Menurender from './Menurender'
import { Button } from 'reactstrap';
import Dropstyle from '../Smalldrop.js'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "I am a ..."
        }
        this.chooseWorker = this.chooseWorker.bind(this)
        this.chooseCustomer = this.chooseCustomer.bind(this)
        
        
    }
    
    
    chooseWorker() {
        this.setState({ status: "Worker" })
    }
    
    chooseCustomer() {
        this.setState({ status: "Customer" })
    }
    
    
    
    render() {
        return (
            <div>
            
                 <h1 style={{fontFamily: 'Public-Sans'}}>{this.state.status}</h1>
                
                
                <button className="buttstyle" onClick={this.chooseWorker}> Worker </button>
                <button className="buttstyle" onClick={this.chooseCustomer}> Customer </button>
                
                <Menurender menu={this.state.status} />
                
            </div>
        )
    }
}

export default Login