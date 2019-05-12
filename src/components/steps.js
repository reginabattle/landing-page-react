import React, { Component } from 'react';

class Steps extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
				//console.log('steps:', this.state.steps);
			}
		);
	}

	render() {
		const { steps } = this.state;
		return (
			<section className="steps">
			  <h2>How it works</h2>
			  <ul className="steps-list">
          {steps
          	.sort( (a, b) => {
          		return a.stepNumber - b.stepNumber;
          	})
          	.filter((step, index) => {
          		const { versionContent } = step;
          		if(versionContent.length > 1) {
          			versionContent.sort((a, b) => {
          				const today = new Date().getTime(); 
          				a = new Date(a.effectiveDate).getTime();
          				b = new Date(b.effectiveDate).getTime();
          				return (today - a) > (today - b) ? 1 : -1;
          			});
          			versionContent.splice(1, versionContent.length);
          		}
          		return step;
          	})
          	.map(step => (
            <li key={step.id} className="step">
              <span className="step-number">{step.stepNumber}</span>
              <h3 className="step-title">{step.versionContent['0'].title}</h3>
              <p>{step.versionContent['0'].body}</p>
            </li>
          ))}
        </ul>
			</section>
		)
	}
}

export default Steps;