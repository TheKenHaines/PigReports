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
            <div className="col-md-12 launch-wrapper">
                <div className="row">
                    <h3>Launched/Recieved Report Form</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Product:
                        </label>
                        <label className="label-launch col-md-6">
                            Line Size:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <select className="input-launch" value={this.handleSubmit} onChange={this.handleInputChange}>
                                <option>-Select-</option>
                                <option value="product">Natural Gas</option>
                                <option value="product">Crude Oil</option>
                                <option value="product">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Line Size" name="linesize" type="number" value={this.state.linesize} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Date Launched:
                        </label>
                        <label className="label-launch col-md-6">
                            Time Launched:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="input-launch" name="datelaunched" type="date" value={this.state.datelaunched} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" name="timelaunched" type="time" value={this.state.timelaunched} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Location Launched:
                        </label>
                        <label className="label-launch col-md-6">
                            Launched By:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Location Launched" name="locationlaunched" type="text" value={this.state.locationlaunched} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Launched By" name="launchedby" type="text" value={this.state.launchedby} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Date Received:
                        </label>
                        <label className="label-launch col-md-6">
                            Time Received:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="input-launch" name="datereceived" type="time" value={this.state.datereceived} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" name="timereceived" type="time" value={this.state.timereceived} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Location Received:
                        </label>
                        <label className="label-launch col-md-6">
                            Received By:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Location Received" name="locationreceived" type="text" value={this.state.locationreceived} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Received By" name="receivedby" type="text" value={this.state.receivedby} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            New Or Used:
                        </label>
                        <label className="label-launch col-md-6">
                            Brush Or Cup:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <select className="input-launch" value={this.handleSubmit} onChange={this.handleInputChange}>
                                <option>-Select-</option>
                                <option value="product">New</option>
                                <option value="product">Used</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select className="input-launch" value={this.handleSubmit} onChange={this.handleInputChange}>
                                <option>-Select-</option>
                                <option value="brush">Brush</option>
                                <option value="cup">Cup</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">
                            Product Purity:
                        </label>
                        <label className="label-launch col-md-6">
                            Contents In Receiver:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Product Purity" name="purity" type="number" value={this.state.purity} onChange={this.handleInputChange} />
                        </div>
                        <div className="col-md-6">
                            <input className="input-launch" placeholder="Contents" name="contents" type="text" value={this.state.contents} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">Comments:</label>
                    </div>
                    <div className="col-md-12">
                        <input className="input-comments-launch" name="comments" type="text" value={this.state.comments} onChange={this.handleInputChange} />
                    </div>
                    <div className="row">
                        <label className="label-launch col-md-6">Upload Photo:</label>
                    </div>
                    <div className="row">
                    <input className="input-launch" name="photo" type="file" id="file-input" required=".jpg"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default launchform;