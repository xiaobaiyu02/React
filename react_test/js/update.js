var TextBoxList = React.createClass({
    getInitialState: function() {
        return {count: 1};
    },
    add: function() {
        this.setState({count: this.state.count + 1});
    },
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.count; i++) {
            items.push(<li className="form-group"><input type="text"  className="form-control" placeholder="change me!" /></li>);
        }
        return (
            <ul>
                {items}
                <input type="button" className="btn btn-primary" value="Add an item" onClick={this.add} />
            </ul>
        );
    }
});
 
ReactDOM.render(<TextBoxList />, document.getElementById("update"));