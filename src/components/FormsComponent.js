import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';

function Forms(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Forms</h3>
                    <a href="../public/assets/forms/Intake.pdf" target="_blank">Intake</a>
                    <br />
                    <a href="../assets/forms/Policies.pdf" target="_blank">Policies</a>
                    <br />
                    <a href="../assets/forms/ReleaseOfInformation.pdf" target="_blank">Release Of Information</a>
                </div>                
            </div>
        </div>
    );
}

export default Forms;