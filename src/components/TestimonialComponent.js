import React from 'react';
import { Row, Col, Button} from 'reactstrap';

function Testimonial(props) {
	return(
		<div className="testimonial">
			<div className="container">
				<div className="row">
					<p className="col-12 testimonialText">"We were so lucky to find Lisa Epstein. She was a tremendous resource for 
							my daughter and us. Lisa demonstrates a certain calm, playful and 
							supportive approach to learning. Her deep knowledge of a multitude 
							of subjects is aided by her flexible and responsive style of teaching. 
							Her joy and skillfulness working with children really shines as my 
							daughter looked forward to her sessions every week."</p>
				</div>
			</div>	
		</div>
	);
}

export default Testimonial;