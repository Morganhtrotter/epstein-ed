import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';
import TestimonialTwo from './TestimonialTwoComponent';

function Forms(props) {
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-12 forms">
                    <h3>Forms</h3>
                    <a href="https://github.com/Morganhtrotter/epstein-ed/raw/dependabot/npm_and_yarn/bootstrap-4.3.1/public/forms/Intake.pdf">Intake</a>
                    <br />
                    <a href="https://github.com/Morganhtrotter/epstein-ed/raw/dependabot/npm_and_yarn/bootstrap-4.3.1/public/forms/Policies.pdf">Policies</a>
                    <br />
                    <a href="https://github.com/Morganhtrotter/epstein-ed/raw/dependabot/npm_and_yarn/bootstrap-4.3.1/public/forms/ReleaseOfInformation.pdf">Release of Information</a>
                </div>                
            </div>
        </div>
        <TestimonialTwo />
        </div>
    );
}

export default Forms;