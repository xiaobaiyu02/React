var NotesList = React.createClass({

	getDefaultProps: function() {
		console.log("---------getDefaultProps (全局调用一次)");
		return {};
	},
	getInitialState: function() {
		console.log("---------geyInitialState");
		return {};
	},
	componentWillMount: function() {
		console.log("---------componentWillMount");
	},
	render: function() {
		console.log("---------render");
		return (
			<div>hello <strong>{ this.props.name }</strong></div>
		);
	},
	componentDidMount: function() {
		console.log("---------componentDidMount");
	},
	componentWillReceiveProps: function() {
		console.log("---------componentWillReceiveProps");
	},
	componentWillUpdate: function() {
		console.log("---------componentWillUpdate");
	},
	componentDidUpdate: function() {
		console.log("---------componentDidUpdate");
	},

});

var list1 = ReactDOM.render(
	<NotesList name='aaa'></NotesList>,
	document.getElementById("lifecycle1")
);

var list2 = ReactDOM.render(
	<NotesList name='bbb'></NotesList>,
	document.getElementById("lifecycle2")
);

list1.setProps({name: 'ccc'});