let { Component } = React;
let { render } = ReactDOM;


class Dialog extends Component{
	constructor(...x){
		super(...x);
		this.state = {open: false};
	}
	handleClick(e){
		this.setState({open: !this.state.open});
	}
	render(){
		let footer;
		if(this.props.type=='confirm'){
		  footer = <footer className='confirm'>
						<button className="btn btn-primary">确定</button>
						<button className="btn btn-default" onClick={ this.handleClick.bind(this) }>取消</button>
					</footer>;
		}
		else{
		  footer = <footer className='alert'>
						<button className="btn btn-primary">确定</button>
					</footer>;
		}
		return(
			<div className="wrapper">
				{
					this.state.open?
					<div className="dialog">
						<h2>
							<div className="title">
								{ this.props.title }
							</div>
							<span className="close" onClick={ this.handleClick.bind(this) }>×</span>
						</h2>
						<div className="content">
							<p>11111111111</p>
						</div>
						{ footer }
					</div>:
					<div></div>
				}

				<button className="btn btn-primary" onClick={ this.handleClick.bind(this) }>{ this.props.btnName }</button>
			</div>
		)
	}
}

render(
	<Dialog size="md" title="This is dialog title" type="confirm" btnName='open a dialog' />,
	document.getElementById("dialog")
)