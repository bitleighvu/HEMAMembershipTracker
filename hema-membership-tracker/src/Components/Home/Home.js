import React from "react";

import "./Home.css";
import { PulseLoader } from "react-spinners";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processing: false,
            emailValid: false
        };
    }

    render() {
        const state = this.state;
        return (
            <div id="home-pg">
                <a className="text-header">Membership Tracker</a>
                <div id="validation">
                    <div id={'input'}>
                        <input
                          id="emailInput"
                          className="form-control form-control-lg"
                          type="email"
                          placeholder="johndoe@hema.com"
                          onChange={this._onChange.bind(this)} 
                          noValidate
                          required
                        />
                    </div>
                    <button
                      id="button-input"
                      className="btn btn-secondary btn-md"
                      onClick={this._onClick.bind(this)}
                      disabled={!state.emailValid} 
                    >
                      {this.state.processing ? <PulseLoader color={"#fafafa"}/> : "VERIFY MEMBERSHIP"}
                    </button>
                </div>
                <span id="message">Please input an email to check on their HEMAA membership status.</span>

            </div>
        );
    }

    _onClick() {
        this.setState({
            processing: true
        });
        setTimeout(() => {
            this.setState({
                processing: false
            })
        }, 2000);
    }

    _onChange(e) {
        var email = e.target.value;
        this.setState({
            emailValid: validEmailRegex.test(email)
        })
        if (email.length > 0 && !this.state.emailValid) {
            document.getElementById('emailInput').className = "form-control form-control-lg error"
        } else {
            document.getElementById('emailInput').className = "form-control form-control-lg"
        }
    }
}

export default Home;
