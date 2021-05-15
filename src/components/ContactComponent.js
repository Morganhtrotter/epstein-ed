import React, { Component } from 'react';
import { Button, Label, Col, Row, } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert("Thank you for your feedback!");
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree,
                 values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    {/*
                    <Breadcrumb>
                      <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Contact Us</BreadcrumbItem> 
                    </Breadcrumb>
                    */}
                    <div className="col-12">
                      <h3>CONTACT INFORMATION</h3>
                      <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-4">
                        <h3>Lisa Soll Epstein</h3>
                        <p>415-722-2046</p>
                        <i className="fa fa-envelope"></i>: <a href="mailto:epsteined@gmail.com">epsteined@gmail.com</a>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-success" href="mailto:epsteined@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h3>Office Location:</h3>
                        <p>The Bay Building</p>
                        <p>711 Grand Avenue, STE 230</p>
                        <p>San Rafael, CA 94901</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h3>Mailing Address:</h3>
                        <p>369B Third Street, #182</p>
                        <p>San Rafael, CA 94901</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;