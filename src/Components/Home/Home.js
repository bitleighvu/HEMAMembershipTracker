import React from "react";

import "./Home.css";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            email: "",
            emailError: "",
            access_token: null,
            contacts: "",
            email_found: false,
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
                            onChange={this.handleChange}
                            required
                        />
                        <span id="error" className='email-error'>{this.state.emailError}</span>
                    </div>
                    <button
                        id="button-input"
                        className="btn btn-secondary btn-md"
                        onClick={this._onClick.bind(this)}
                    >
                        {this.state.processing ? <PulseLoader color={"#fafafa"} /> : "VERIFY MEMBERSHIP"}
                    </button>
                    <ToastContainer autoClose={false} closeButton={<CloseButton />} />
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

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            this.setState({ emailError: "Please enter a valid email address!" });
        } else {
            this.setState({ emailError: "" });
            this.authenticate();
        }

        // setTimeout(() => {
        //     this.setState({
        //         processing: false
        //     })
        // }, 2000);
    }

    authenticate() {
        // Data to receive auth token needed for to communicate with TidyHQ during session
        // const authData = {
        //     client_id: hemaa_client_id,
        //     client_secret: hemaa_client_secret,
        //     domain_prefix: "hemaa",
        //     username: 'swalsh38@gatech.edu',
        //     password: 'XRm7bKfh4QLNtwM3pXPM',
        //     grant_type: 'password'
        // }

        fetch('https://accounts.tidyhq.com/oauth/token', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/x-www-form-urlencoded' }),
            body: 'client_id=3b166b189518c59d68676b7b8f54673f77e003fc605ed22ca40678c3ed61dcfa&client_secret=09e9a949465fe11e7ab4683e0ea3007c44dceaeb6785df863928be0e5071d59b&domain_prefix=hemaa&grant_type=password&username=seanwalsh@gatech.edu&password=XRm7bKfh4QLNtwM3pXPM'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ access_token: res['access_token'] });
                this.searchMembers();
            });
    }

    searchMembers() {
        // Get email list from HEMAA records
        fetch(`https://api.tidyhq.com/v1/contacts?access_token=${this.state.access_token}`, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/x-www-form-urlencoded' }),
        })
            .then(res => res.json())
            .then(res => {
                let filtered_contacts = {};
                for (let contact of res) {
                    filtered_contacts[contact.email_address] = contact.id;
                }
                this.setState({ contacts: filtered_contacts });
                this.searchEmail();
            });
    }

    searchEmail() {
        // If emails returned successfully, get membership of ID associated with desired email
        if (this.state.contacts == null || !this.state.contacts[this.state.email]) {
            this.setState({ email_found: false });
        } else {
            let email_id = this.state.contacts[this.state.email];
            fetch(`https://api.tidyhq.com/v1/contacts/${email_id}/memberships?access_token=${this.state.access_token}`, {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/x-www-form-urlencoded' }),
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({email_found: false})
                    if (res != null) {
                        for (var i = 0; i < res.length; i++) {
                            if (res[i] && res[i].state && res[i].state === "activated") {
                                this.setState({ email_found: true })
                                break
                            }
                        }
                    }
                    // if (res == null || !res[0] || !res[0].state || res[0].state !== "activated") {
                    //     this.setState({email_found: false})
                    // } else {
                    //     this.setState({email_found: true})
                    // }
                    this.updateUser();
                });
        }
    }

    updateUser() {
        if (this.state.email_found === false) {
            toast.error(`'${this.state.email}' is not a registered HEMAA account`);
        } else {
            toast.success(`'${this.state.email}' is a registered HEMAA account`);
        }
        this.setState({
            processing: false
        })
    }
}

export default Home;
