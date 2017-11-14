import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import NotFound from './Component/NotFound';

const MenuLink = ({ label, to, activeWhenExact}) =>{
	return (
		<Route path={ to } exact={ activeWhenExact } children={ ({ match }) => {
			let active = match ? "active" : "";
			return (
				<li className={`hello ${ active }`}>
					<Link className={ active } to={ to } >{ label }</Link>
				</li>
			)
		}} />
	)

}
class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">				
				<nav className="navbar navbar-default">
					<ul className="nav navbar-nav">
						{/* <NavLink exact activeStyle={{backgroundColor:'white', color:'red'}} to="/" className="my-link">Trang chu</NavLink> */}
						{/* <NavLink exact activeClassName="active" to="/" className="my-link">Trang chu</NavLink> */}
						<MenuLink label="Trang Chu" to="/" activeWhenExact={ true } />
						{/* <NavLink activeStyle={{backgroundColor:'white', color:'red'}} to="/contact" className="my-link">Lien he</NavLink> */}
						{/* <NavLink activeClassName="active" to="/contact" className="my-link">Lien he</NavLink> */}
						<MenuLink label="Lien he" to="/contact" />
						{/* <NavLink activeStyle={{backgroundColor:'white', color:'red'}} to="/about" className="my-link">Ve chung toi</NavLink> */}
						{/* <NavLink activeClassName="active" to="/about" className="my-link">Ve chung toi</NavLink> */}
						<MenuLink label="Ve chung toi" to="/about" />
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact component={ Home } />
					<Route path="/about" component={ About } />	
					<Route path="/contact" component={ Contact } />
					<Route component={ NotFound } />
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
