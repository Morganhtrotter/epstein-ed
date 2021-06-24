import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
		 Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		//this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	render() {
		return(
			<React.Fragment>
				<Navbar dark expand="md">
	        <div className="container">
	        	<NavbarToggler onClick={this.toggleNav} />
	        	{/*
	          <NavbarBrand className="mr-auto" href="/">
	          	<img src="../assets/images/logo.png" class="float-right"  height="30" width="41" alt="logo.png" />
	          </NavbarBrand>
	          	*/}
	          <Collapse isOpen={this.state.isNavOpen} navbar>
		          <Nav navbar>
		          	<NavItem>
		          		<NavLink className="nav-link" to="/home">
		          			<span></span> HOME
		          		</NavLink>
		          	</NavItem>
		          	<NavItem>
		          		<NavLink className="nav-link" to="/menu">
		          			<span></span> ABOUT
		          		</NavLink>
		          	</NavItem>
		          	<NavItem>
		          		<NavLink className="nav-link" to="/aboutus">
		          			<span></span> MY SERVICES
		          		</NavLink>
		          	</NavItem>
		          	<NavItem>
		          		<NavLink className="nav-link" to="/forms">
		          			<span></span> FORMS
		          		</NavLink>
		          	</NavItem>
		          	<NavItem>
		          		<NavLink className="nav-link" to="/contactus">
		          			<span></span> CONTACT
		          		</NavLink>
		          	</NavItem>
		          </Nav>
		          {/*
		          <Nav className="ml-auto" navbar>
		          	<NavItem>
		          		<Button outline onClick={this.toggleModal}>
		          			<span className="fa fa-sign-in fa-lg"></span> Login
		          		</Button>
		          	</NavItem>
		          </Nav>
		          */}
	          </Collapse>
	        </div>
	      </Navbar>
	      <Jumbotron>
	      	<div className="container headerContainer">
	      		<div className="row row-header">
	      			<div className="col-12 col-sm-6 headerOutline">
	      				<img className="mb-2 logo" src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/logotwo.png" alt="logo.png" />
	      				<img className="mb-2 logom" src="https://raw.githubusercontent.com/Morganhtrotter/epstein-ed/dependabot/npm_and_yarn/bootstrap-4.3.1/public/assets/images/logotwo.png" alt="logo.png" />
	      				<p className="body">Helping students develop skills and strategies for academic success and confidence in a safe
								and nurturing environment</p>
	      			</div>
	      		</div>
	      	</div>
	      </Jumbotron>
			</React.Fragment>
		);
	}
}

export default Header;