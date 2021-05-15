import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
	return(
		<Carousel fade>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://morgantrotter.herokuapp.com/assets/images/enterbg.webp"
		      alt="First slide"
		    /> 
		    <Carousel.Caption>
		      <h3>What is educational therapy?</h3>
		      <p>An educational therapist combines educational and therapeutic approaches for evaluation,
					remediation, case management, communication and advocacy on behalf of children and
					adolescents with learning disabilities or learning challenges. The therapist works in conjunction
					with the student, parents, and other professionals to support the child socially, emotionally, and
					academically.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://morgantrotter.herokuapp.com/assets/images/enterbg.webp"
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>Personalized Approach</h3>
		      <p>An educational therapist provides students with more than content specific academic support.
					Using a personalized approach, she helps her students understand their learning style and use
					that knowledge to develop new skills and strategies so that they can succeed at academic and
					everyday tasks.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://morgantrotter.herokuapp.com/assets/images/enterbg.webp"
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>The Goal:</h3>
		      <p>As an educational therapist, my primary goal is to make myself obsolete: ultimately, my students
					will utilize a toolbox that we build together in order to function independently and successfully in
					academic settings.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
	);
}

export default Home;