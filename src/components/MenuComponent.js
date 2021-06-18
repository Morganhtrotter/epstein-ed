import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';
import TestimonialTwo from './TestimonialTwoComponent';

function About(props) {
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>MORE ABOUT LISA</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img
                      class="headshot"
                      src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/EpsteinHR20-21.png"
                      alt="Image not found"
                    />
                </div>
                <div className="col-8">
                    <h4>Education:</h4>
                    <p className="caps">EDUCATIONAL THERAPY CERTIFICATION</p>
                    <p>University of California, Santa Cruz Extension</p>
                    <p className="caps">TEACHING CREDENTIAL</p>
                    <p>Dominican University, San Rafael, CA
                        Single Subject (history) and Multiple Subject Credentials</p>
                    <p className="caps">JURIS DOCTORATE</p>
                    <p>University of California, Hastings College of the Law</p>
                    <p className="caps">MASTER OF SOCIAL WORK</p>
                    <p>University of Texas, Austin</p>
                    <p className="caps">BACHELOR OF ARTS</p>
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
        <TestimonialTwo />
        </div>
    );
}

export default About;