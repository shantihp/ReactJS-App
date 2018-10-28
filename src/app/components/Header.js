import React from "react";

/*Stateless components : A component which doesn't use state in any way. It is created by using
const keyword.*/

/*export class Header extends React.Component {
	render(){*/
	export const Header = (props) => {
		return(
			<nav className= "navbar navbar-default"> 
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li> <a href="#"> {props.homeLink}</a> </li>
						</ul>					
					</div>
				</div>
			</nav>
		);
	}
	/*}
}*/