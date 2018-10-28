import React from "react";

/*Notes:
1. Props are what are passed from one component from another. React provides a property named 
"this.props" to manage props.
2. States are change of props inside a specific component. React provides a property named
"this.state" to refer to the state.*/

export class Home extends React.Component{
	constructor(props){
		super();
		/*this.age = props.age;*/
		this.state = {
			age : props.age,
			status:0,
			homeLink : props.initialLinkName
		}

		setTimeout( () => {
			this.setState({
				status:1
			})
		}, 3000);
		console.log("In constructor")		
	}

	// ReactJS lifecycle functions below
	componentWillMount(){
		console.log("Component will Mount");
	}
	componentDidMount(){
		console.log("Component Did Mount");
	}
	componentWillReceiveProps(nextProps){
		console.log("Component Will Receive Props" +nextProps);
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log("Should Component Update" +nextProps + nextState);
		/*if(nextState.status ===1){
			return false;
			// this block ensures that as soon as the status becomes 1, no component update
			// will happen, i.e. component will not be re-rendered.
		}*/
		return true;
	}
	componentWillUpdate(nextProps, nextState){
		console.log("Component Will Update"  +nextProps + nextState);
	}
	componentDidUpdate(nextProps, nextState){
		console.log("Component Did Update"  +nextProps + nextState);
	}
	componentWillUnmount(nextProps, nextState){
		console.log("Component Will Upmount");
	}

	makeolder(){
		/*this.age+=3;*/
		this.setState({
			age: this.state.age+3
		});
		console.log("age is: " + this.state.age);
	}
	onchangeLink(){
		this.props.changeLink(this.state.homeLink);
	}
	onHandleChange(event){
		this.setState({
			homeLink : event.target.value
		})
	}

	render(){
		console.log(this.props);
		console.log("name of user is: "+ this.props.user.name);
		let content="";
		if(true){
			content = "Hello. This is sample dynamic content being displayed through react"+
				+"logic of {} braces";
		}

		return(
			<div>
				<p>In a new Component!!</p>
				<hr/>
				Some random dynamic content below: <br/>
				{content}<br/>
				{2+2}<br/>
				{5 == 2 ? "Yes" : "No"}
				<hr/>
				{/*<p>Your name is {this.props.name} , Your age is {this.props.age} </p>*/}
				{/*<p>Your name is {this.props.name} , Your age is {this.age}</p>*/}
				{/*above lines displayed data without using state*/}

				<p>Your name is {this.props.name} , Your age is {this.state.age} </p>
				<p>Status is {this.state.status} </p>
				<p> User object is => Name: {this.props.user.name}</p>

				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
					</ul>
				</div>
				{this.props.children}
				<hr/>
				<button onClick= { () => this.makeolder()} className="btn btn-primary">
					Make me Older!
				</button>
				{/*or this ->*/}
				{/*<button onClick={this.makeolder.bind(this)} className="btn btn-primary">
					Make me Older!</button>*/}
				<hr/>
				<button onClick= {this.props.greet} className="btn btn-primary">Greet</button>
				<input type="text"
					   value={this.state.homeLink}
					   onChange={(event) => this.onHandleChange(event)}/>
				<button onClick= {this.onchangeLink.bind(this)} className="btn btn-primary">
				Change Home Link</button>
			</div>
		);
	}
}

{/*Home.PropTypes = {
		various proptypes names and types here
	};*/}