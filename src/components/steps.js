import React, { Component } from 'react';

class Steps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			steps: []
		};	
	}

	componentDidMount() {
		fetch("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge")
			.then(response => response.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					steps: json
				});
				console.log('steps:', this.state.steps);
			}
		);
	}

	render() {
		const { isLoaded, steps } = this.state;
		return (
			<section className="steps">
			  <h2>How it works</h2>

			  <ul className="steps-list">
          {steps.map(step => (
            <li key={step.id} className="step">
              <span className="step-number">{step.stepNumber}</span>
            </li>
          ))}
        </ul>
			</section>
		)
	}
}

export default Steps;