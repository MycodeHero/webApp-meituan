var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
    render: function () {
        return (
            <h1>ddd</h1>
        )
    }
});
ReactDom.render(
    <App/>,
    document.getElementById('root')
)