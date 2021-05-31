import React, { Component, Button } from 'react';
import {useForm} from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

class receiveform extends Component {
    
    render() {
        return (
    <div className="App">
                  <form>
                <div class="form-group row">
    <label >Product:</label>
            <input type="select"></input>
                </div>

                    <div className = "form-control">
                        <label>Password</label>
                        <input type="password" name= "password"/>
                    </div>
                    <div className="form-control">
                        <label></label>
                        <button type="submit">Login</button>
                    </div>
                    <Button type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default receiveform;