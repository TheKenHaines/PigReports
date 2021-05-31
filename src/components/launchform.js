import React, { Component, Button } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { XLSX } from 'xlsx';



class launchform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: " ",
            purity: " ",
            linesize: " ",
            datelaunched: " ",
            timelaunched: " ",
            locationlaunched: " ",
            launchedby: " ",
            datereceived: " ",
            timereceived: " ",
            locationreceived: " ",
            receivedby: " ",
            condition: " ",
            pigtype: " ",
            brushcup: " ",
            purity: "",
            receivercontents: " ",
            comments: " ",
            photo: " "
        };

        let data = this.state.bind

        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    saveToExcel(event) {
        const wb = XLSX.utils.book.new();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div class="col-md-12">
                <div className="form-row align-items-center">
                    <h1>PIG Launched/Received Report Form</h1>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Product:</label>
            <select value={this.handleSubmit} onChange={this.handleInputChange} >
                                            <option>-Select-</option>
                                            <option value="product">Natural Gas</option>
                                            <option value="product">Crude Oil</option>
                                            <option value="product">Other</option>
                                        </select>
                                    
                                </div>
                                <div className="col-md-6">
                                <label>Line Size:</label>
            <input
            name="linesize" type="number" value={this.state.linesize}
            onChange={this.handleInputChange} />
                            
                                </div>

                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                            <label>Date Launched:</label>
            <input
                                    name="datelaunched"
                                    type="date"
                                    value={this.state.datelaunched}
                                    onChange={this.handleInputChange} />
                            
                            </div>
                            <div className="col-md-6">
                            <label>Time Launched:</label>
            <input
                                    name="timelaunched"
                                    type="time"
                                    value={this.state.timelaunched}
                                    onChange={this.handleInputChange} />
                            
                            </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                            <label>Location Launched: </label>
            <input                  placeholder="location"
                                    name="locationlaunched"
                                    type="text"
                                    value={this.state.locationlaunched}
                                    onChange={this.handleInputChange} />
                           
                            </div>
                            <div className="col-md-6">
                            <label>Launched By:</label>
            <input
                                    name="launchedby"
                                    type="text"
                                    value={this.state.launchedby}
                                    onChange={this.handleInputChange} />
                            
                            </div>
                                </div>
                                <br/>
                            <div className="row">
                                <div className="col-md-6">
                                <label> Date Received:</label>
            <input
                                    name="datereceived"
                                    type="date"
                                    value={this.state.datereceived}
                                    onChange={this.handleInputChange} />
                            
                                </div>
                                <div className="col-md-6">
                                <label>Time Received:</label>
            <input
                                    name="timereceived"
                                    type="time"
                                    value={this.state.timereceived}
                                    onChange={this.handleInputChange} />
                            
                                </div>
                            </div>
                            <br/>
                            
                            <div className="row">
                                <div className="col-md-6">
                                <label>Location Received:</label>
            <input
                                    name="locationreceived"
                                    type="text"
                                    value={this.state.locationreceived}
                                    onChange={this.handleInputChange} />
                            
                                </div>
                                
                            <div className="col-md-6">
                            <label>Received By:</label>
            <input
                                    name="receivedby"
                                    type="text"
                                    value={this.state.receivedby}
                                    onChange={this.handleInputChange} />
                            
                            </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                <label>New or Used PIG:</label>
            <select value={this.handleSubmit} onChange={this.handleInputChange} >
                                    <option>-Select-</option>
                                    <option value="product">New</option>
                                    <option value="product">Used</option>
                                </select>
                                </div>
                                <div className="col-md-6">
                                    <label>Brush or Cup</label>
                                    <select value={this.handleSubmit} onChange={this.handleInputChange}>
                                        <option>-Select-</option>
                                        <option value="brushcup">Brush</option>
                                        <option value="brushcup">Cup</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            
                            <div className="row">
                                <div className="col-md-6">
                               <label> Product Purity:</label>
            <input 
                                    name="purity"
                                    type="number"
                                    value={this.state.purity}
                                    onChange={this.handleInputChange}/>
                            </div>
                            <div className="col-md-6">
                            <label>Contents in receiver:</label>
            <input
                                    name="contents"
                                    type="text"
                                    value={this.state.contents}
                                    onChange={this.handleInputChange} />                           
                            </div>
                            </div>
                        <br/>
                            <div className="row">
                            <label> Comments:</label>
            <input
                                    name="comments"
                                    type="text"
                                    value={this.state.comments}
                                    onChange={this.handleInputChange} />
                            
                            </div>
                            <br/>
                            <div className="row">
                            <label>
                                <div className="mb-1">
                                    Upload Photo <span className="font-css top">*</span>
                                    <div className="">
                                        <input
                                            name="photo"
                                            type="file"
                                            id="file-input"
                                            required=".jpg"
                                        />
                                    </div>
                                </div>
                            </label>
                            </div>
                               

                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default launchform;