class UndepositedFunds extends React.Component {
	constructor(){
		super()
		this.state = {
			// displayRewards: false,
		}
		this.toggleRewardDisplay = this.toggleRewardDisplay.bind(this)
	}

	toggleRewardDisplay(){
		let shouldToggleRewards = !this.props.displayRewards
		this.props.setDisplayRewards(shouldToggleRewards)
		// this.setState({
		// 	displayRewards: shouldToggleRewards
		// })
	}

	render(){
		return(

				<div className="row undeposited-funds">
					<div className="col-md-6 col-md-offset-3">
						<h1 className="text-center child-welcome">Welcome {this.props.current_child.name}, you have {this.props.current_child.dollars} to Deposit.</h1>
					</div>
					<div className="col-md-3">
						<button onClick={this.toggleRewardDisplay} type="button" className="btn btn-success btn-lg btn-block">Rewards</button>
						{this.props.displayRewards ? <ChildRewardList rewards={this.props.current_child.rewards} child={this.props.current_child} /> : null }
					</div>
				</div>

			)
	}
}
