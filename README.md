During this pandemic, simple things such as going to the grocery store have become complicated. I have created a website that functions as a central destination for grocery stores' health and safety reviews in Marin County, in the hope that I can make people's trips to the store safer and simpler. The site uses React/Redux to save user's reviews and display it for anybody to see.

![Alt Text](https://github.com/Morganhtrotter/shop-safe-marin/blob/master/public/assets/images/HomePage.gif)

To view or post a review, first navigate to the "Stores" page. Here, you can filter the available stores by chain, city, or a combination of the two.

![Alt Text](https://github.com/Morganhtrotter/shop-safe-marin/blob/master/public/assets/images/Filter.gif)

		  if (filter !== null) {
		    filterArr = filter.split(';');
		  }  
		  let dishes = props.dishes.dishes;
		  if (filter !== null) {
		    if (filterArr[0] !== null && filterArr[0] !== "--") {
		      dishes = dishes.filter((dish) => dish.name === filterArr[0]);
		    }
		    if (filterArr[1] !== null && filterArr[1] !== "--") {
		      dishes = dishes.filter((dish) => dish.city === filterArr[1]);
		    }
		  }

Once you have found your desired store, click on it to view the available reviews. You can submit your own review by clicking the "Submit Review" button, and filling out the form.

![Alt Text](https://github.com/Morganhtrotter/shop-safe-marin/blob/master/public/assets/images/Review.gif)

You can also navigate to the "Contact Us" page, and fill out the form to send us feedback. Your information will be uploaded to our JSON server, which is viewable at the same address.

![Alt Text](https://github.com/Morganhtrotter/shop-safe-marin/blob/master/public/assets/images/Feedback.gif)

		export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
			const newFeedback = {
				firstname: firstname,
				lastname: lastname,
				telnum: telnum,
				email: email,
				agree: agree,
				contactType: contactType,
				message: message
			}
			newFeedback.date = new Date().toISOString();
			return fetch(baseUrl + 'feedback', {
				method: 'POST',
				body: JSON.stringify(newFeedback),
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'same-origin'
			})
				.then(response => {
					if (response.ok) {
						return response;
					}
					else {
						var error = new Error('Error ' + response.status + ': ' + response.statusText);
						error.response = response;
						throw error;
					}
				},
				error => {
					var errmess = new Error(error.message);
					throw errmess;
				})
				.then(response => response.json())
				.catch(error => { console.log('Post feedback ', error.message);
					alert('Your feedback could not be posted\nError: ' + error.message);});
		};

This project uses React/Redux to POST the users review data to a JSON-server, and then subsequently FETCHES that same data to be displayed on the respective grocery stores' page.

It uses the react-redux-form library to create controlled forms for the user

		const maxLength = (len) => (val) => !(val) || (val.length <= len);
		const minLength = (len) => (val) => (val) && (val.length >= len);
		const required = (val) => val && val.length;
		...
		<Row className="form-group">
			<Col>
				<Control.text model=".yourname" id="yourname" name="yourname"
						placeholder="Your Name (optional)"
						className="form-control"
						validators={{
							maxLength: maxLength(15)
						}} />
				<Errors 
						className="text-danger"
						model=".yourname"
						show="touched"
						messages={{
							maxLength: 'Must be 15 characters or less'
						}}
				/>
			</Col>
		</Row>