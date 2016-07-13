class Component extends React.Component {

		render() {
			return(
				<div>
					<h1>My name is Tim, and I love NYC</h1>
					<img src={this.props.img} height={300}/>
				</div>
			);
		}
	}

ReactDOM.render(
				<div>
					<Component img="img/Meetings_In_New_York.jpg" />
					<Component img="img/nyc-monthly-parking.jpg" />
					<Component img="img/skyline-buildings-new-york-skyscrapers.jpg" />
				</div>, document.getElementById('content'));