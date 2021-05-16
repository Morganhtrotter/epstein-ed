import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';

function About(props) {
    return(
        <div className="container">
            <div className="row">
                {/*
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                */}
                <div className="col-12">
                    <h3>MORE ABOUT LISA</h3>
                    <h4>Education:</h4>
                    <p>EDUCATIONAL THERAPY CERTIFICATION PROGRAM</p>
                    <p>University of California, Santa Cruz Extension</p>
                    <p>TEACHING CREDENTIAL PROGRAM</p>
                    <p>Dominican University, San Rafael, CA
                        Single Subject (history) and Multiple Subject Credentials</p>
                    <p>JURIS DOCTORATE</p>
                    <p>University of California, Hastings College of the Law</p>
                    <p>MASTER OF SOCIAL WORK</p>
                    <p>University of Texas, Austin</p>
                    <p>BACHELOR OF ARTS</p>
                    <p>University of Texas, Austin</p>
                    <h4>Professional Development</h4>
                    <p>The Neuropsychology of Learning Disabilities, Learning and the Brain</p>
                    <p>Neuroscience and Classroom Engagement, Learning and the Brain</p>
                    <p>The Neuroscience of Reading, Learning and the Brain</p>
                    <p>Sarah Ward, Executive Function</p>
                    <p>Making Math Real</p>
                    <p>Wilson Reading System</p>
                    <p>Member: Association of Educational Therapists</p>
                </div>                
            </div>
        </div>
    );
}

export default About;