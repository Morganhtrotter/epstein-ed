import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import ColorBar from './ColorBarComponent';
import Testimonial from './TestimonialComponent';

function Home(props) {
	return(
		<div>
			<Carousel fade class="carousel">
			  <Carousel.Item interval={15000}>
			    <img
			      class="carouselImg"
			      src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/First.png"
			      alt="First slide"
			    /> 
			    <Carousel.Caption class="caption col-md-12">
			      <div class="captionText">
				      <h3>What is educational therapy?</h3>
				      <p>An educational therapist combines educational and therapeutic approaches for evaluation,
							remediation, case management, communication and advocacy on behalf of children and
							adolescents with learning disabilities or learning challenges. The therapist works in conjunction
							with the student, parents, and other professionals to support the child socially, emotionally, and
							academically.</p>
				  </div>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item interval={15000}>
			    <img
			      class="carouselImg"
			      src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/third.png"
			      alt="Second slide"
			    />

			    <Carousel.Caption class="caption col-md-12">
			      <div class="captionText">
				      <h3>Personalized Approach</h3>
				      <p>An educational therapist provides students with more than content specific academic support.
							Using a personalized approach, she helps her students understand their learning style and use
							that knowledge to develop new skills and strategies so that they can succeed at academic and
							everyday tasks.</p>
				  </div>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item interval={15000}>
			    <img
			      class="carouselImg"
			      src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/second.png"
			      alt="Third slide"
			    />

			    <Carousel.Caption class="caption col-md-12">
			      <div class="captionText">
				      <h3>The Goal</h3>
				      <p>As an educational therapist, my primary goal is to make myself obsolete: ultimately, my students
							will utilize a toolbox that we build together in order to function independently and successfully in
							academic settings.</p>
				  </div>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			<ColorBar />
			<div className="container homeAbout">
	      		<div className="row">
	      			<div className="col-12">
						<h3>About Lisa:</h3>
						<p>After a short career as an attorney, Lisa realized her first love was teaching, so she earned single
								subject (history) and multiple subject teaching credentials and has been working as an educator
								since 1994. Lisa has been a middle school English and history teacher, an elementary school
								reading intervention teacher, an adjunct instructor in the teaching credential program at Dominican
								University of California, a writing specialist for a private college counselor, and currently a learning
								specialist at Marin Country Day School in Marin County.</p>
						<p>Lisa’s favorite part of teaching is individual, targeted work with students. The most crucial aspect
								of this very important work is developing a trusting relationship with her client. With kindness and
								empathy, Lisa tries to help students understand how they learn, delving into their strengths and
								challenges, so that she and the student can build a “toolbox” to utilize in the student’s academic
								endeavors. Lisa’s goal is to help students become confident and independent learners.</p>
						<p>Lisa is the parent of three young adults. Raising her own children has helped her understand the
								social, emotional, and academic demands on young people today.</p>
						<p>Lisa has worked with students who have various diagnosed learning challenges as well as those
								who simply want to improve their writing or study skills.</p>
					</div>
				</div>
			</div>
			<Testimonial />
		</div>
	);
}

export default Home;