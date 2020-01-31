import React from "react";

import "./EventSignIn.css";


class EventSignIn extends React.Component {

    render() {
        return (
            <div id="eventSignIn-pg">
                <a className="text-header">Event Sign-In</a>

                <form id="signIn-form">
                    <div class="form-row ">
                        <label>I'm a:</label>
                        <div id="radioGroup">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="radioOp1"
                                    value="member"
                                />
                                <label class="form-check-label" for="radioOp1">Registered Member</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="radioO2"
                                    value="vendor"
                                />
                                <label class="form-check-label" for="radioOp2">Vendor</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="radioOp3"
                                    value="sponsor"
                                />
                                <label class="form-check-label" for="radioOp3">Sponsor</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="radioOp4"
                                    value="guest"
                                />
                                <label class="form-check-label" for="radioOp4">Guest</label>
                            </div>
                        </div>
                        
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4 text-left">
                            <label for="firstName">First Name</label>
                            <input type="text" 
                                class="form-control"
                                id="inpufirstNametEmail4"
                                placeholder="John"
                            />
                        </div>
                        <div class="form-group col-md-4 text-left">
                            <label for="lastName">Last Name</label>
                            <input type="text"
                                class="form-control"
                                id="lastName" 
                                placeholder="Doe"
                            />
                        </div>
                        <div class="form-group col-md-4 text-left">
                            <label for="email">Email Address</label>
                            <input type="email"
                                class="form-control"
                                id="email" 
                                placeholder="johndoe@email.com"
                            />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-12 text-left">
                            <label for="eventInput">Which event are you attending?</label>
                            <select id="eventInput" class="form-control">
                                <option selected>Choose...</option>
                                <option>Event 1</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                value="agreed" />
                            <label class="form-check-label" for="agreed">I have read and signed off on the
                                <a href="https://static1.squarespace.com/static/55b01d82e4b0ee47a1e0a740/t/5642c105e4b036cd16793279/1447215365176/HEMA-Alliance-Waiver.pdf" class="text-decoration-none text-reset" target="_blank" id="releaseFormLink"> 
                                    Release and Waiver of Liability and Indemnity Agreement
                                </a>
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-secondary" id="signInButton">Sign in</button>
                </form>

            </div>
        );
    }
}

export default EventSignIn;
