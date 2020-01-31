import React from "react";

import "./Home.css";
import { PulseLoader } from "react-spinners";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processing: false,
        };
    }

    render() {
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
                          required
                        />
                    </div>
                    <button
                      id="button-input"
                      className="btn btn-secondary btn-md"
                      onClick={this._onClick.bind(this)}
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
}

export default Home;
