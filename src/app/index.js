import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
	constructor(){
		super();
		this.state={
			homeLink : "Home",
			homeMounted : true
		};
	}
	onChangeHomeMounted(){
		this.setState({
			homeMounted : !this.state.homeMounted
		});
	}
	onChangeLinkName(newName){
		this.setState({
			homeLink : newName
		});
	}
	onGreet(){
		alert("Hello!");
	}

	render(){
		var user = {
			name : "Anna",
			hobbies : ["Table Tennis", "Reading"]
		};
		let homeComponent = "";
		if(this.state.homeMounted){
			homeComponent = (
				<Home
					name={"Max"}
					age={24}
					user={user}
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName = {this.state.homeLink}>
				<p>This is a paragraph and it is being printed using props.children!</p>
				</Home>
			)
		}

		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
					{homeComponent} 
					{/*Above line is replacing below set of lines denoting home component*/}
					{/*<Home
						name={"Max"}
						age={24}
						user={user}
						greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)}
						initialLinkName = {this.state.homeLink}>
					<p>This is a paragraph and it is being printed using props.children!</p>
					</Home>	*/}				
					</div>	
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">
							(Un)Mount Home Component
						</button>
					</div>				
				</div>			
			</div>			
		);

	}
}

render(<App/>, window.document.getElementById("reactJSApp"));