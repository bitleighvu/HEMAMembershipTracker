import React from "react";

import "./Home.css";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import testData from './testData.csv';
import parseData from '../../Helpers/Parser'
// const fs = require('fs');
// const file = fs.createReadStream('testData.csv');

const CloseButton = ({ closeToast }) => (
    <i
      className="material-icons"
      onClick={closeToast}
    >
    X
    </i>
  );

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processing: false,
            email: "null",
            access_token: null,
            contacts: null,
            memberships: null,
        };
        this.handleChange = this.handleChange.bind(this);
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
                          onChange={ this.handleChange }
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
                    <ToastContainer autoClose={false} closeButton={<CloseButton/>}/>
                </div>

                <span id="message">Please input an email to check on their HEMAA membership status.</span>

            </div>
        );
    }

    handleChange(e) {
        this.setState({ email: e.target.value });
    }

    _onClick() {
        this.setState({
            processing: true
        });

        let membership_list = this.tidyhqCall();
        let is_member = parseData(membership_list, this.email);

        if (is_member == null || !is_member) {
            toast.error(`${this.email} is not a registered HEMAA account`);
        } else {
            toast.success(`${this.email} is a registered HEMAA account`);
        }

        setTimeout(() => {
            this.setState({
                processing: false
            })
        }, 2000);
    }

    tidyhqCall() {
        // Data to receive auth token needed for to communicate with TidyHQ during session
        const authData = {
            client_id: "tki243BueTALiEZLJA0W5Gkc3FeM786IykCiEJuZoCWvQaTyGXXHfvNcezsdySbv",
            client_secret: "57C38mNBomfCrpiwkfSZgxeh2ZdduImA5CB30JqMCWOIt3Ij9jYzhpZBfYGpeQGo",
            client_uri: "localhost:3000",
            grant_type: "grant_type",
        }
        fetch('https://accounts.tidyq.com/oauth/token', authData)
            .then(res => res.json())
            .then(data => this.setState({ accessToken: data.access_token }
        ));

        // Get email list from HEMAA records
        fetch('https://api.tidyhq.com/v1/contacts', this.access_token)
            .then(res => res.json())
            .then(data => this.setState({ members: data.contacts }
        ));

        // If emails returned successfully, get membership of ID associated with desired email
        if (this.state.contacts == null || !this.state.contacts.contact_emails) {
            return null;
        } else {
            let email_id = this.contacts.contact_emails[this.email];
            let membership_json = null;
            fetch(`https://api.tidyhq.com/v1/${email_id}/memberships`, this.access_token)
                .then(res => membership_json = res.json());
            return membership_json
        }
    }
}

export default Home;
