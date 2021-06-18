import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Stagger, Fade } from 'react-animation-components';
import TestimonialThree from './TestimonialThreeComponent';

function Services(props) {
    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3>MY SERVICES</h3>
                    <p>Intensive one on one work with students allows them the opportunity to sharpen academic skills
                            and, in turn, improve how they feel about themselves. Typically, after an initial intake meeting with
                            parents (and possibly the student), review of any prior educational evaluations, informal
                            evaluations, communication with other professionals who have worked with the student, and the
                            school as appropriate, I will develop a plan in conjunction with the student and their family.</p>
                    <p>Depending upon the individual student, the plan might include remediation in certain areas,
                            scaffolding to help students master academic concepts, executive function coaching, study skills
                            training, or some combination thereof. If a school assignment lends itself to a skill that needs
                            attention, we can use the assignment to more organically develop that skill. Some skills that I can
                            help students master are:</p>
                    <h4>Reading:</h4>
                    <ul>
                        <li>Decoding</li>
                        <li>Fluency</li>
                        <li>Vocabulary development</li>
                        <li>Comprehension</li>
                    </ul>
                    <h4>Writing:</h4>
                    <ul>
                        <li>Writing mechanics</li>
                        <li>Organization</li>
                        <li>Essay and other lengthy writing pieces</li>
                        <li>Comprehension</li>
                    </ul>
                    <h4>Skill Development:</h4>
                    <ul>
                        <li>Critical Thinking</li>
                        <li>Executive Functioning Skills</li>
                        <li>Short term, working, and long term memory</li>
                        <li>Test-taking and study skills</li>
                        <li>Organizational skills</li>
                        <li>Self advocacy</li>
                    </ul>
                    <p>I have experience in working with students with various diagnosed and
                            undiagnosed learning and other challenges including, but not limited to ADHD,
                            dyslexia, language processing, anxiety, executive function and Down
                            syndrome.</p>
                    <p>Services are offered either in person in my central San Rafael office or via Zoom.</p>
                </div>                
            </div>
        </div>
        <TestimonialThree />
        </div>
    );
}

export default Services;